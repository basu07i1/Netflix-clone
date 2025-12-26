// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqq7aHK_W0u9_0GQaYFbNhsPFH9J4z39A",
  authDomain: "netflixgpt-680de.firebaseapp.com",
  projectId: "netflixgpt-680de",
  storageBucket: "netflixgpt-680de.firebasestorage.app",
  messagingSenderId: "11702665020",
  appId: "1:11702665020:web:5710e158fd65915918e839",
  measurementId: "G-2R6XER4NYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();