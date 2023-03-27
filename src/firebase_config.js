// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyc3mx8mEAoSEwP8JzFD8VNSh9IPiNzVA",
  authDomain: "diary-app-ukiyo.firebaseapp.com",
  projectId: "diary-app-ukiyo",
  storageBucket: "diary-app-ukiyo.appspot.com",
  messagingSenderId: "71284921764",
  appId: "1:71284921764:web:2bf85d357cbee945541d31",
  measurementId: "G-HLNBZPE32Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//initialize auth and get provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//initialize firestore for database
export const db = getFirestore(app);