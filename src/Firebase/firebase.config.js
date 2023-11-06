// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHdVzUQlNmNCGGlnt6bIPN38vXo23-FcI",
  authDomain: "phero-arena.firebaseapp.com",
  projectId: "phero-arena",
  storageBucket: "phero-arena.appspot.com",
  messagingSenderId: "871189567112",
  appId: "1:871189567112:web:f667076b9b38266677b13d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;