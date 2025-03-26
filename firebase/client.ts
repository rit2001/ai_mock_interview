// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu5-HeammD6df5oCWhZWQxSaZjlVlIBgc",
  authDomain: "prepwise-c3261.firebaseapp.com",
  projectId: "prepwise-c3261",
  storageBucket: "prepwise-c3261.firebasestorage.app",
  messagingSenderId: "399040471097",
  appId: "1:399040471097:web:c8cb99eb1bb933ba5cade8",
  measurementId: "G-486E7XCXJQ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);