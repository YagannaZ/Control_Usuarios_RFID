import {
    collection,
    getDoc,
    doc,
    addDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IUser } from '../interfaces/userInterface.interface';
import AlertUserForm from './AlertUserForm';


function Form() {
    // const [user, setUser] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
    const [form, setForm] = useState<IUser>({
        name: '',
        RFID: '',
        active: true
    })
    const [alert, setAlert] = useState<string>('success')
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [mensaje, setMensaje] = useState<string>()

    //Desestructurar form para facilitar el uso
    const { name, RFID } = form

    //Registra las pulsaciones de cualquiera de los dos inputs, 
    //y va guardando el estado en cada pulsacion
    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = target
        setForm({
            ...form,
            [id]: value
        });
    }

    //Vacía el formulario
    const resetForm = (): void => {
        setForm({
            name: '',
            RFID: '',
            active: true
        })
    }

    //Guardar y activar usuario
    const newUser = async (e: FormEvent) => {
        
        e.preventDefault()
        //COMPROBAR QUE LOS INPUTS TIENE ALGO ESCRITO
        if (name && RFID) {

            //COMPROBAR QUE NO HAY NINGÚN USUARIO REGISTRADO CON EL MISMO RFID
            const testRFID = doc(db, 'usuarios', RFID)
            const testRFIDSnap = await getDoc(testRFID)
            if (!testRFIDSnap.exists()) {
                //AÑADIR USUARIO Y MENSAJE EXITO
                await addDoc(collection(db, 'Usuarios'), {
                    name: name,
                    RFID: RFID,
                    active: 'activo'
                });


                setMensaje('Usuario registrado.')
                setAlert('success')
                setShowAlert(true)

            } else {
                //MENSAJE ERROR
                setShowAlert(false)
                setMensaje('Usuario ya registrado.')
                setAlert('warning')
                setShowAlert(true)
            }

        } else {
            setShowAlert(false)
            setAlert('warning')
            setMensaje('Debes rellenar ambos campos.')
            setShowAlert(true)
        }
    }


    return (

        <>
            <div className="container ">
                <h1>Formulario</h1>

                <form onSubmit={newUser} className='pt-3'>

                    <div className="form-floating m-3">
                        <input type="text"
                            className="form-control"
                            id="name"
                            placeholder="Nombre de usuario"
                            value={name}
                            onChange={onInputChange} />
                        <label htmlFor="name">Nombre de usuario</label>
                    </div>

                    <div className="form-floating m-3">
                        <input type="text"
                            className="form-control"
                            id="rfid"
                            placeholder="rfid"
                            value={RFID}
                            onChange={onInputChange} />
                        <label htmlFor="rfid">RFID</label>
                    </div>
                    <button type='submit' className='btn btn-dark mt-2'>Guardar usuario</button>
                    <button className='btn btn-danger mt-2' onClick={resetForm}>Vaciar formulario</button>

                </form>
                {showAlert && <AlertUserForm type={alert} mensaje={mensaje} />}
            </div>

        </>

    )
}

export default Form

// export function setupAlerta(mensaje: string, tipo: string, boolean: boolean)=> {

//     setMensaje(mensaje)
//     setAlert(tipo)
//     setShowAlert(boolean)
// }