import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';

dotenv.config();

const { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, 
    MESSAGING_SENDER_ID, APP_ID } = process.env;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

export const firebase = initializeApp(firebaseConfig);
export const db = initializeApp(firebaseConfig);
