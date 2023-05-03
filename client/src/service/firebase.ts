import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-M7tNA4FId-uWdGNOTYFodvLnbtPRE7M",
  authDomain: "reminz-test.firebaseapp.com",
  projectId: "reminz-test",
  storageBucket: "reminz-test.appspot.com",
  messagingSenderId: "80944830458",
  appId: "1:80944830458:web:78a13cf34f50897431f643",
  measurementId: "G-7PW2W7HZ2D",
};

export const appConfig = initializeApp(firebaseConfig);
export const analyticsConfig = getAnalytics(appConfig);
export const authConfig = getAuth(appConfig);
