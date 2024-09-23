import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8dgza4EIpRbdibsV9UHCa64uS2aS9tgc",
  authDomain: "financeiro-70c4f.firebaseapp.com",
  projectId: "financeiro-70c4f",
  storageBucket: "financeiro-70c4f.appspot.com",
  messagingSenderId: "595795816737",
  appId: "1:595795816737:web:0f569644d815ac60648e60",
  measurementId: "G-HYV4BL7ES4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };