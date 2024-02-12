/*eslint-disable*/
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDPeQ8YP9V3wp_mT4uOVygkno9BlfpqsVU",
  authDomain: "squardmeal.firebaseapp.com",
  projectId: "squardmeal",
  storageBucket: "squardmeal.appspot.com",
  messagingSenderId: "423276086698",
  appId: "1:423276086698:web:1cbea6b8196fddc5e357d3",
  measurementId: "G-GX29Z9MH95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export {app,auth, db, storage};
/*eslint-disable*/
