
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-8017e.firebaseapp.com",
  projectId: "interviewiq-8017e",
  storageBucket: "interviewiq-8017e.firebasestorage.app",
  messagingSenderId: "657467931857",
  appId: "1:657467931857:web:e7e88e100bed380904d9f0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}