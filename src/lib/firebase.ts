// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "student-central-hub-5w4l8",
  "appId": "1:379433916597:web:f1617837e2ebd5e87206fc",
  "storageBucket": "student-central-hub-5w4l8.firebasestorage.app",
  "apiKey": "AIzaSyDbd88RXQ9XdovaJuNvCJQCHgwAG58ckCM",
  "authDomain": "student-central-hub-5w4l8.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "379433916597"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);


export { app, db, auth };
