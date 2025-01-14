// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXA8Bf2dSxCfUQFM__XGOdJFtG-s4GXZQ",
  authDomain: "scholarbridge-d09f2.firebaseapp.com",
  projectId: "scholarbridge-d09f2",
  storageBucket: "scholarbridge-d09f2.firebasestorage.app",
  messagingSenderId: "359522606061",
  appId: "1:359522606061:web:2d05f9382c4960e46465e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)