// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx3pVb4PicRf_Xy53KT9LpV9IvyT4LS24",
  authDomain: "iptv-web-mini.firebaseapp.com",
  projectId: "iptv-web-mini",
  storageBucket: "iptv-web-mini.appspot.com",
  messagingSenderId: "1011174713490",
  appId: "1:1011174713490:web:e292958e66fcf14dbb5e4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;