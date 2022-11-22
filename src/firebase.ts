// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXIGbJyX1MX4RES_1e8_wB3B_bPPBFRik",
  authDomain: "inventory-409bf.firebaseapp.com",
  projectId: "inventory-409bf",
  storageBucket: "inventory-409bf.appspot.com",
  messagingSenderId: "796073562800",
  appId: "1:796073562800:web:971c3e02e8b0578d7da175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);