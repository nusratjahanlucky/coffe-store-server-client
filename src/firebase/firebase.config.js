// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ1Xe4JY7L31tIErgof0Gay_Z5BvnJ1rs",
  authDomain: "coffe-store-2e1ac.firebaseapp.com",
  projectId: "coffe-store-2e1ac",
  storageBucket: "coffe-store-2e1ac.appspot.com",
  messagingSenderId: "26530395155",
  appId: "1:26530395155:web:ee4313106dd3eaa7f9bbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
