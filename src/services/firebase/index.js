// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBijg-0fXAvosOuxPUHocSljQxMKLN-BUU",
  authDomain: "brauerei-e-shop.firebaseapp.com",
  projectId: "brauerei-e-shop",
  storageBucket: "brauerei-e-shop.appspot.com",
  messagingSenderId: "1026827798306",
  appId: "1:1026827798306:web:c0386600712ca81d53877b",
  measurementId: "G-X28PZD4ENW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);