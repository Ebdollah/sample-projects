// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq1KNRSY85gXKvQdg_pV4k1kH-ZYrCZvQ",
  authDomain: "user-auth-web-a08f1.firebaseapp.com",
  projectId: "user-auth-web-a08f1",
  storageBucket: "user-auth-web-a08f1.appspot.com",
  messagingSenderId: "528169747441",
  appId: "1:528169747441:web:fbd2cba66ad1896c103a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export const auth = getAuth();

export default app;
export function firestore() {
  throw new Error('Function not implemented.');
}

