import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
// https://serialport.io/docs/api-parser-readline
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebase } from './firebase/config';
import { IRfid } from './interfaces/rfid.interface';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const arduinoSerialPort = new SerialPort({ path: 'COM6', baudRate: 9600 });
const parser = arduinoSerialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

const db = getFirestore(firebase);

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

arduinoSerialPort.on('open', () => {
  console.log('Conexión con placa Arduino establecida');
});

// arduinoSerialPort.on('data', (data) => {
//   console.log(data.toString());
// });

parser.on('data', async (data) => {
  const lectura: IRfid = JSON.parse(data);
  console.log(lectura);

  try {
    const dataRfid: IRfid = {
      nombreUsuario: lectura.nombreUsuario,
      estado: lectura.estado,
      hora: new Date(),
      clave: lectura.clave
    };
    ///////////////////////////////////////////
    // Consultar la base de datos para verificar la autorización de la tarjeta
   const tarjetaRef = db.collection('tarjetas').doc(lectura.clave);
    const tarjetaDoc = await tarjetaRef.get();
    await addDoc(collection(db, 'usuarios'), dataRfid);
    if (tarjetaDoc.exists) {
      //const nombreUsuario = tarjetaDoc.data().nombre;
      if (lectura.estado) {
        console.log(`Acceso concedido a ${lectura.nombreUsuario}`);
        // Enviar mensaje a Arduino para permitir el acceso
        arduinoSerialPort.write('ACCESO_PERMITIDO');
      } else {
        console.log(`Acceso denegado a ${lectura.nombreUsuario}`);
        // Enviar mensaje a Arduino para denegar el acceso
        arduinoSerialPort.write('ACCESO_DENEGADO');
      }
    } else {
      console.log('Tarjeta no registrada');
      // Enviar mensaje a Arduino para denegar el acceso
      arduinoSerialPort.write('ACCESO_DENEGADO');
    }
    ////////////////////////////////////////////////////////////////
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log('Servidor en ejecución en puerto ' + port);
});