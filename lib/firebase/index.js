// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcTPt8_W8NmlzJEsUsDSKx24DGXp9tdoY",
  authDomain: "finance-tracker-4b7b1.firebaseapp.com",
  projectId: "finance-tracker-4b7b1",
  storageBucket: "finance-tracker-4b7b1.appspot.com",
  messagingSenderId: "679673598514",
  appId: "1:679673598514:web:cda65d1650b71bdaf7e22b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };