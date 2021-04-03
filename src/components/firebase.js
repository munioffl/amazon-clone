import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA0OzTBp7LTLIvqo9pNopy4n1bnGeGU0E",
  authDomain: "clone-e4c2c.firebaseapp.com",
  projectId: "clone-e4c2c",
  storageBucket: "clone-e4c2c.appspot.com",
  messagingSenderId: "44894177016",
  appId: "1:44894177016:web:39d7da4bebaad5c6661d0d",
  measurementId: "G-G67WWY5Q50",
  databaseURL: "https://clone-e4c2c.firebaseio.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
