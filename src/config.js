import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc99rmV1H-sKqVLES4TdmsiqCSuGNVBn4",
  authDomain: "moving-app-9fd7c.firebaseapp.com",
  projectId: "moving-app-9fd7c",
  storageBucket: "moving-app-9fd7c.appspot.com",
  messagingSenderId: "1840740870",
  appId: "1:1840740870:web:b2b45d57427907ed3f2187",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
