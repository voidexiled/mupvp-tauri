import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkyQGHpl5VgigZ0Hss-Aicufagh18RIVQ",
  authDomain: "mupvptool.firebaseapp.com",
  databaseURL: "https://mupvptool-default-rtdb.firebaseio.com",
  projectId: "mupvptool",
  storageBucket: "mupvptool.appspot.com",
  messagingSenderId: "152591368903",
  appId: "1:152591368903:web:a6e1011b9dd31aa0a1f4e2",
  measurementId: "G-B6Y91YKN88",
};
const app = firebase.initializeApp(firebaseConfig);
export default app;
