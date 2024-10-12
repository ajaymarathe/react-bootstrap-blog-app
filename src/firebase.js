// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuFGlZvXMNtFR_PTzSlobLGMRFxJRs5EM",
  authDomain: "angular-firebase-blog-ap-72487.firebaseapp.com",
  projectId: "angular-firebase-blog-ap-72487",
  storageBucket: "angular-firebase-blog-ap-72487.appspot.com",
  messagingSenderId: "774452431768",
  appId: "1:774452431768:web:e1742237f11c9e9a0d79ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
