// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWwiCdBeboaSDYaj_lIExlR6KycWz-MgQ",
  authDomain: "arduino-12f4d.firebaseapp.com",
  projectId: "arduino-12f4d",
  storageBucket: "arduino-12f4d.appspot.com",
  messagingSenderId: "518839453994",
  appId: "1:518839453994:web:009b53d5678d5f0279f653"
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