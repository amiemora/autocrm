// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-tCiTSHZ9JnCRUAa0soDgj5mJbC2iLBc",
  authDomain: "amie-s-crm.firebaseapp.com",
  projectId: "amie-s-crm",
  storageBucket: "amie-s-crm.appspot.com",
  messagingSenderId: "495739432372",
  appId: "1:495739432372:web:0e3f5feaca936a8af456e1",
  measurementId: "G-Y14JWH6YNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
