import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9AU7jxqKpcgAHEiZmjpTR-C6YIJkgmvM",
  authDomain: "todo-list-17c86.firebaseapp.com",
  databaseURL: "https://todo-list-17c86-default-rtdb.firebaseio.com",
  projectId: "todo-list-17c86",
  storageBucket: "todo-list-17c86.appspot.com",
  messagingSenderId: "427798819401",
  appId: "1:427798819401:web:60c532235a29e031ef8598"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export  const firebaseAuthInstance = getAuth(app);
export const auth = getAuth();
