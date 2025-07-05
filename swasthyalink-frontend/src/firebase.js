// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPjcEq6QrS5Vj0ebuJnW_vEYoQ8aKNBC8",
  authDomain: "swasthyalink.firebaseapp.com",
  projectId: "swasthyalink",
  storageBucket: "swasthyalink.firebasestorage.app",
  messagingSenderId: "365037278316",
  appId: "1:365037278316:web:7b43334ba53993a64a3449",
  measurementId: "G-ZVLQH62Y1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
