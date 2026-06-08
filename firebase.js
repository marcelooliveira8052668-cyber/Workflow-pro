import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyADOJt6tLDSBm7PSa2h830YcVDukbS87yU",
  authDomain: "workflow-pro-4d27a.firebaseapp.com",
  projectId: "workflow-pro-4d27a",
  storageBucket: "workflow-pro-4d27a.firebasestorage.app",
  messagingSenderId: "792481006303",
  appId: "1:792481006303:web:0381d003a359b723789f6a",
  measurementId: "G-Y9B7ESZ537"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };

