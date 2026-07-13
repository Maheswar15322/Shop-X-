

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  
  apiKey: "AIzaSyBk1JnOdUvIVPEUlv-HWgn7XjC2NeoFpqc",
  authDomain: "shopx-dd333.firebaseapp.com",
  projectId: "shopx-dd333",
  storageBucket: "shopx-dd333.firebasestorage.app",
  messagingSenderId: "548128984554",
  appId: "1:548128984554:web:bbfaa854480d25ad35f693",
  measurementId: "G-G9MPXNXR2T"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);