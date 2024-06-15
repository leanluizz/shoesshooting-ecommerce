
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEjXqySbPe8Or9ry_QXNtEgDPSHgkSats",
  authDomain: "shoes-shooting-v3.firebaseapp.com",
  projectId: "shoes-shooting-v3",
  storageBucket: "shoes-shooting-v3.appspot.com",
  messagingSenderId: "413843139152",
  appId: "1:413843139152:web:082fd1c9d796ed3cc4ff55",
  measurementId: "G-9BMQEGX7WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)