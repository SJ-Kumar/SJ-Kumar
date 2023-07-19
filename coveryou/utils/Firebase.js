// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: String(process.env.NEXT_PUBLIC_FB_KEY),
  authDomain: String(process.env.NEXT_PUBLIC_FB_AUTH),
  projectId: String(process.env.NEXT_PUBLIC_FB_PROJECT),
  storageBucket: String(process.env.NEXT_PUBLIC_FB_BUCKET),
  messagingSenderId: String(process.env.NEXT_PUBLIC_FB_MSGID),
  appId: process.env.NEXT_PUBLIC_FB_APP,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);