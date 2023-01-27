// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH7i0E91DBkLJr1WiU8qajAMgAGkD003k",
  authDomain: "chat-groupe-ac614.firebaseapp.com",
  projectId: "chat-groupe-ac614",
  storageBucket: "chat-groupe-ac614.appspot.com",
  messagingSenderId: "380004839578",
  appId: "1:380004839578:web:e574f3ab1d7b302fa16f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
export const db = getFirestore(app); 