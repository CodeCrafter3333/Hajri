// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDZqXgEVHwy_McfyoNYjAcG8aV5PGdzOu0",
//   authDomain: "hajri-3c27d.firebaseapp.com",
//   databaseURL: "https://hajri-3c27d-default-rtdb.firebaseio.com",
//   projectId: "hajri-3c27d",
//   storageBucket: "hajri-3c27d.appspot.com",
//   messagingSenderId: "28081537455",
//   appId: "1:28081537455:web:379ea1f3a3f4dc52356f5a",
//   measurementId: "G-N7H85TD47Q"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC9PxhIwIqZfhMkigIFZST1oXnGWudRHyI",
  authDomain: "hajri2.firebaseapp.com",
  projectId: "hajri2",
  storageBucket: "hajri2.appspot.com",
  messagingSenderId: "276250341912",
  appId: "1:276250341912:web:d56503fc9db38e84a2c96d",
  measurementId: "G-E7NLRS0JTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
