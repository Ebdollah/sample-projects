import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYe1dUymFsCo2KZumYLsKW7ZTtstOktqA",
    authDomain: "user-auth-web.firebaseapp.com",
    projectId: "user-auth-web",
    storageBucket: "user-auth-web.appspot.com",
    messagingSenderId: "249083424195",
    appId: "1:249083424195:web:7d3fc54a9d692fe61a2176"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
