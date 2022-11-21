// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpVjYaHxm40D-LS7m9DHNRKbNW_CL-dnE",
  authDomain: "imobiliaria-react-150a5.firebaseapp.com",
  projectId: "imobiliaria-react-150a5",
  storageBucket: "imobiliaria-react-150a5.appspot.com",
  messagingSenderId: "57855464619",
  appId: "1:57855464619:web:316ef7de0c4ff5fc97d3ee"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()