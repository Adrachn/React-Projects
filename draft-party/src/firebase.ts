// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8pV_-aXARj5VnnbW3ZvU0Jv4oHYwz0Rw",
  authDomain: "draft-party-4c731.firebaseapp.com",
  databaseURL: "https://draft-party-4c731-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "draft-party-4c731",
  storageBucket: "draft-party-4c731.appspot.com",
  messagingSenderId: "554101819788",
  appId: "1:554101819788:web:dcea5bd754750e6a90eea9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
