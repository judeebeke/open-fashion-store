// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx8jOcGwHO6mUHX7vNKb8h4gaxygjTYnM",
  authDomain: "open-fashion-55eda.firebaseapp.com",
  projectId: "open-fashion-55eda",
  storageBucket: "open-fashion-55eda.appspot.com",
  messagingSenderId: "467425296109",
  appId: "1:467425296109:web:c53512d3a4df584503d6e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);