// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6FMW6lSgAtXZJ0cJAWoUZl0335vJcxII",
  authDomain: "vite-contact-app-a0550.firebaseapp.com",
  projectId: "vite-contact-app-a0550",
  storageBucket: "vite-contact-app-a0550.appspot.com",
  messagingSenderId: "147574817800",
  appId: "1:147574817800:web:b618d347e6f7321d0bfdbd",
  measurementId: "G-2TML2QH60M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)