import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

let app: FirebaseApp | null = null;

export const getFirebaseApp = (): FirebaseApp | null => {
  if (app) return app;
  if (!firebaseConfig.apiKey) {
    return null;
  }
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  return app;
};

export const getAuthClient = () => {
  const firebaseApp = getFirebaseApp();
  return firebaseApp ? getAuth(firebaseApp) : null;
};

if (typeof window !== "undefined") {
  const firebaseApp = getFirebaseApp();
  if (firebaseApp) {
    isSupported().then((supported) => {
      if (supported) {
        getAnalytics(firebaseApp);
      }
    });
  }
}

export default getFirebaseApp;
