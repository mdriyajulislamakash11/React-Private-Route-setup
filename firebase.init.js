// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNG9boLlhzOBUVhitlbaGGvx9zJHYzApc",
  authDomain: "practice-peivate-route.firebaseapp.com",
  projectId: "practice-peivate-route",
  storageBucket: "practice-peivate-route.firebasestorage.app",
  messagingSenderId: "53834151456",
  appId: "1:53834151456:web:4609a2d1f2168a29dd2e45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);