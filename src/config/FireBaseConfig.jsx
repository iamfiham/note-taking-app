// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzd3-kHKZFxTeRcl0q83xle4TfVtAwALc",
  authDomain: "note-taking-app-cb358.firebaseapp.com",
  projectId: "note-taking-app-cb358",
  storageBucket: "note-taking-app-cb358.appspot.com",
  messagingSenderId: "605036475615",
  appId: "1:605036475615:web:4c7ce14240bae3a197a56a",
  measurementId: "G-WHJYQQSMY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
