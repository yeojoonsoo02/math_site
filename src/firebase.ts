import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMokcJcqzePqZpk4krph9ovk0uLVzYxqc",
  authDomain: "mathsite-3acdd.firebaseapp.com",
  projectId: "mathsite-3acdd",
  storageBucket: "mathsite-3acdd.firebasestorage.app",
  messagingSenderId: "246514933494",
  appId: "1:246514933494:web:2316945a7717b5f7bcd6d7",
  measurementId: "G-HM54LMW688"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

if (typeof window !== "undefined") {
  getAnalytics(app);
}

export default app;
