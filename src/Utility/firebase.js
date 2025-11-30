import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCBWjJ1vfrgl-6t6BUOSA5-7uIERKvjdE",
  authDomain: "tenaplus-7a754.firebaseapp.com",
  projectId: "tenaplus-7a754",
  storageBucket: "tenaplus-7a754.firebasestorage.app",
  messagingSenderId: "530572422760",
  appId: "1:530572422760:web:8d52dca5cc8a1751f795dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);