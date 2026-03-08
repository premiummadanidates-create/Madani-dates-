const firebaseConfig = {
  apiKey: "AIzaSyB_SpzW6u1nZaCxkgYGUXccp9i7WFpAntI",
  authDomain: "madani-dates.firebaseapp.com",
  projectId: "madani-dates",
  storageBucket: "madani-dates.firebasestorage.app",
  messagingSenderId: "20861999967",
  appId: "1:20861999967:web:e538567af1e0b85ba174ea"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

window.auth = auth;
window.db = db;
