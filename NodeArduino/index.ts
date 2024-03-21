import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
// https://serialport.io/docs/api-parser-readline
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { IRfid } from './interfaces/rfid.interface';
import { firebase } from './firebase/config';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const arduinoSerialPort = new SerialPort({ path: 'COM4', baudRate: 9600 });
const parser = arduinoSerialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

const db = getFirestore(firebase);

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

arduinoSerialPort.on('open', () => {
  console.log('Conexión con placa Arduino establecida');
});

// arduinoSerialPort.on('data', (data) => {
//   console.log(data);
// });

parser.on('data', async (data) => {
  console.log(data);
  try {
    const dataLuz: IRfid = {
      estado: data,
      hora: new Date()
    };
    await addDoc(collection(db, 'luces'), dataLuz);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log('Servidor en ejecución en puerto ' + port);
});