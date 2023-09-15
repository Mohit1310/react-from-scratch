// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgELgBlrYjsMKLanlUz8IaSrV57c8wnA8",
  authDomain: "netflixgpt-3a2d9.firebaseapp.com",
  projectId: "netflixgpt-3a2d9",
  storageBucket: "netflixgpt-3a2d9.appspot.com",
  messagingSenderId: "396115403824",
  appId: "1:396115403824:web:9839721de0974aebd439f5",
  measurementId: "G-HMHWLTJQD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();