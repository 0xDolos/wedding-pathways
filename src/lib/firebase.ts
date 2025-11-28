import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjB0H6-W-UV1ulyI3HK2OixEp9IWlkNzk",
  authDomain: "anna-mike-wedding.firebaseapp.com",
  projectId: "anna-mike-wedding",
  storageBucket: "anna-mike-wedding.firebasestorage.app",
  messagingSenderId: "503860551136",
  appId: "1:503860551136:web:4aa5996b1d1079c076df85",
  measurementId: "G-PR4NHJN2TH"
};

// Ensure Firebase doesn't initialize twice in dev (hot reload)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);