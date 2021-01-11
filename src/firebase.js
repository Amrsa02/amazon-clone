import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVajCCt_uryVzpp6N0Ohx-miSOby8KD8Y",
  authDomain: "challange-7a663.firebaseapp.com",
  databaseURL: "https://challange-7a663.firebaseio.com",
  projectId: "challange-7a663",
  storageBucket: "challange-7a663.appspot.com",
  messagingSenderId: "65674062526",
  appId: "1:65674062526:web:f6d21a84f29684b03d4cef",
  measurementId: "G-4YVZ368S4L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};