// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3exZNl5abxQGTMR-SN5PmvSrHBcTnGjQ",
    authDomain: "ifaz-vuejs-project.firebaseapp.com",
    projectId: "ifaz-vuejs-project",
    storageBucket: "ifaz-vuejs-project.appspot.com",
    messagingSenderId: "255940985647",
    appId: "1:255940985647:web:04e4e80811d5f0b96fd7da",
    measurementId: "G-WCNKV7QGNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// here we can export reusable database references
export const usersRef = collection(db, "users");
export const categoriesRef = collection(db, "categories");
export const blogsRef = collection(db, "blogs");
export const commentsRef = collection(db, "comments");