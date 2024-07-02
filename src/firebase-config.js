// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrTQLsOYK3jP9DCoVvdA1aw3BCyD3NUoE",
  authDomain: "mydigitaldiary-99029.firebaseapp.com",
  projectId: "mydigitaldiary-99029",
  storageBucket: "mydigitaldiary-99029.appspot.com",
  messagingSenderId: "1069401687780",
  appId: "1:1069401687780:web:589e045e4e8cc932a10ef1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider()