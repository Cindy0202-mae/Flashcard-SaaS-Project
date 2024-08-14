// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXrC0CVj-km-WyQtzMQfSRDSiaYgHcqjo",
  authDomain: "flashcards-91cd1.firebaseapp.com",
  projectId: "flashcards-91cd1",
  storageBucket: "flashcards-91cd1.appspot.com",
  messagingSenderId: "519939159765",
  appId: "1:519939159765:web:6d6346839cf6fd4601545c",
  measurementId: "G-GJGZ1GT2FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);