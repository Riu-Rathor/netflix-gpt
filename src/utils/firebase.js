
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnCmNo-wZ2WYs2vrmcjQjHSzHTqlx7eAc",
  authDomain: "netflixgpt-9e601.firebaseapp.com",
  projectId: "netflixgpt-9e601",
  storageBucket: "netflixgpt-9e601.firebasestorage.app",
  messagingSenderId: "679293849782",
  appId: "1:679293849782:web:d44587c6cd5c2eb84c5617",
  measurementId: "G-XQRFHDFLL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();