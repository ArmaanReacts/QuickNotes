// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoJ9b5fCoOOu9vW27LP8SPSb30Wv5qVlQ",
  authDomain: "react-markdown-notes-346fa.firebaseapp.com",
  projectId: "react-markdown-notes-346fa",
  storageBucket: "react-markdown-notes-346fa.appspot.com",
  messagingSenderId: "690546017373",
  appId: "1:690546017373:web:8ee0dfdafc626804a879b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")