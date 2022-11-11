// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIHYaAluMzwljrXnGVhNV7Uly9CQ3HajA",
  authDomain: "react-firbase-app-d47a2.firebaseapp.com",
  projectId: "react-firbase-app-d47a2",
  storageBucket: "react-firbase-app-d47a2.appspot.com",
  messagingSenderId: "736083076697",
  appId: "1:736083076697:web:490ca754807e318f163348"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db =getFirestore();
