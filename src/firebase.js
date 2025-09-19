import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA2X4bqH0eK1ac1WDG3jzDKki5w02b-Hnw",
  authDomain: "first-dashboard-3486b.firebaseapp.com",
  projectId: "first-dashboard-3486b",
  storageBucket: "first-dashboard-3486b.appspot.com",
  messagingSenderId: "661185263514",
  appId: "1:661185263514:web:4207744e9e59e9c7bf6c23",
  measurementId: "G-6R2XH6WLT1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);