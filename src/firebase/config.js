// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEtDkDYFx3ZHiMZGjbAaTAGR8GKdFspVo",
  authDomain: "theplacebeyondthepines-74318.firebaseapp.com",
  projectId: "theplacebeyondthepines-74318",
  storageBucket: "theplacebeyondthepines-74318.appspot.com",
  messagingSenderId: "397749363865",
  appId: "1:397749363865:web:fb967b2562ed2c03a78408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);