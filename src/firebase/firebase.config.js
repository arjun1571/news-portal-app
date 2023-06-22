// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7hB_9L05aqrEayacOCxa4IoPDj-10LRs",
  authDomain: "news-portal-app-a7a6c.firebaseapp.com",
  projectId: "news-portal-app-a7a6c",
  storageBucket: "news-portal-app-a7a6c.appspot.com",
  messagingSenderId: "492299475771",
  appId: "1:492299475771:web:c658bf05d87da77fe8f51e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;