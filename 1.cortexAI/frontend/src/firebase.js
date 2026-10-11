import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2nZJIIdNGpzGiL6Zr00oaFZFsBbyTrE4",
  authDomain: "cortexaidemo-f81a9.firebaseapp.com",
  projectId: "cortexaidemo-f81a9",
  storageBucket: "cortexaidemo-f81a9.firebasestorage.app",
  messagingSenderId: "183296968974",
  appId: "1:183296968974:web:aa358ebf757562114baf5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();