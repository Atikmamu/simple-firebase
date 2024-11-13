// Do not store config on the client side 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// DANGER: DO not share config publicly 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpYiYAZIdBih3PdntSV3m76sf_J51fNMo",
  authDomain: "simple-firebase-71867.firebaseapp.com",
  projectId: "simple-firebase-71867",
  storageBucket: "simple-firebase-71867.firebasestorage.app",
  messagingSenderId: "955261421171",
  appId: "1:955261421171:web:9847ccd4f7c07a4f268c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;