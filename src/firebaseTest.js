// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { get, child } from 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBZH1M16kvK4_AUVlZtCHxY5ZLE3y_1I8",
  authDomain: "eco-scan.firebaseapp.com",
  databaseURL: "https://eco-scan-default-rtdb.firebaseio.com",
  projectId: "eco-scan",
  storageBucket: "eco-scan.appspot.com",
  messagingSenderId: "985585837598",
  appId: "1:985585837598:web:4b41d85a1e908de55db00f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ansRef = firebase.database().ref(`answers`);

export const testFirebase = () => {
  get(child(ansRef, `test`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No Data Found");
    }
  });
} 