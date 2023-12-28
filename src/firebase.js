// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9ecJgZZbPKRcY1_eitnrIsobuYSh_JXY",
  authDomain: "vue-app-ifaz-86538.firebaseapp.com",
  projectId: "vue-app-ifaz-86538",
  storageBucket: "vue-app-ifaz-86538.appspot.com",
  messagingSenderId: "461263171796",
  appId: "1:461263171796:web:8c145e83c9dda789f88b41",
  measurementId: "G-WJE51MK8TQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// here we can export reusable database references
export const blogsRef = collection(db, "blogs");
export const usersRef = collection(db, "users");
export const commentsRef = collection(db, "comments");