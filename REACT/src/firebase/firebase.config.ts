// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFErg5GNTxrQ4pLRPaHwUP1U1rrLIOPLA",
  authDomain: "arduino-a117.firebaseapp.com",
  projectId: "arduino-a117",
  storageBucket: "arduino-a117.appspot.com",
  messagingSenderId: "623418416087",
  appId: "1:623418416087:web:48c6a89b425db238a98992"
};

// Initialize Firebase
// Inicializamos Firebase con la configuración que acabamos de especificar arriba
const app = initializeApp(firebaseConfig);

// Creamos algo público para que desde cualquier componente podamos venir aquí y utilizar Firebase. Cada componente que utilice Firebase importará firebaseConfig y utilizará db (podría tener otro nombre) para usar, en este caso, Firestore
export const db = getFirestore(app);

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq279VjZWZP-kNd2S1exDMQusj2TTUhT4",
  authDomain: "control-de-usuarios-169f0.firebaseapp.com",
  projectId: "control-de-usuarios-169f0",
  storageBucket: "control-de-usuarios-169f0.appspot.com",
  messagingSenderId: "448861611556",
  appId: "1:448861611556:web:91f0f5436fa2cf615a5ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/