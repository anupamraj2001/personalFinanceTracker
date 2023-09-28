// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore , doc ,setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwL4QH3lgWS4GC0RgzvjMAWGN7noQewbM",
  authDomain: "financely-bfb45.firebaseapp.com",
  projectId: "financely-bfb45",
  storageBucket: "financely-bfb45.appspot.com",
  messagingSenderId: "403404568685",
  appId: "1:403404568685:web:c51f9e6fb5b68023576764",
  measurementId: "G-3E3366X2LR"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };