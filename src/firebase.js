// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC1s6vASAD_1XnjA1Z5kk48ZAQJWcr-C7A",
  authDomain: "todo-app-c17f8.firebaseapp.com",
  projectId: "todo-app-c17f8",
  storageBucket: "todo-app-c17f8.appspot.com",
  messagingSenderId: "375867456128",
  appId: "1:375867456128:web:58e695fed3ce3102d90465",
  measurementId: "G-H745HXV2WV",
});

const db = firebaseApp.firestore();

export default db;
