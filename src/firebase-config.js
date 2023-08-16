// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChBJ00SjPgG_7jkkW2OUfCCDqiLvSSUzs",
    authDomain: "next-firebase-234fb.firebaseapp.com",
    projectId: "next-firebase-234fb",
    storageBucket: "next-firebase-234fb.appspot.com",
    messagingSenderId: "662231562777",
    appId: "1:662231562777:web:bf68791dc810fe211a4888",
    measurementId: "G-9K426T6FZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)