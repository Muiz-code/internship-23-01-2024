import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFgOvuqU_kPelHPNJrYtrDGlQGTfnKTZ8",
  authDomain: "emailpasswordlogin-90df5.firebaseapp.com",
  projectId: "emailpasswordlogin-90df5",
  storageBucket: "emailpasswordlogin-90df5.appspot.com",
  messagingSenderId: "769419616670",
  appId: "1:769419616670:web:e7b0ba63140230dae3768f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
