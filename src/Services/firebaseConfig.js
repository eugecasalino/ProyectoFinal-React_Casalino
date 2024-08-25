// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwowR7_G5mLrbhwd_8C2vkt7Z_DLh08b8",
    authDomain: "laboutique-8f308.firebaseapp.com",
    projectId: "laboutique-8f308",
    storageBucket: "laboutique-8f308.appspot.com",
    messagingSenderId: "979372796630",
    appId: "1:979372796630:web:6b26f54b6281571343b777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);