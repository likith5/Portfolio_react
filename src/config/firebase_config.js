// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8VtuxVUyR7aZAufBeQtBGyu9fIZ2Qjmc",
  authDomain: "portfolio-ce93e.firebaseapp.com",
  projectId: "portfolio-ce93e",
  storageBucket: "portfolio-ce93e.appspot.com",
  messagingSenderId: "96284714494",
  appId: "1:96284714494:web:58edd03208fce7c2240caf",
  measurementId: "G-8CK1VHZFTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);