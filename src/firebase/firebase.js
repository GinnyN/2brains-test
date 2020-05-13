import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAhTekYJwWMGIaj0CSElTDYRJPcnQWvyus",
  authDomain: "authtest-f76dd.firebaseapp.com",
  databaseURL: "https://authtest-f76dd.firebaseio.com",
  projectId: "authtest-f76dd",
  storageBucket: "authtest-f76dd.appspot.com",
  messagingSenderId: "177880364278",
  appId: "1:177880364278:web:316fcf27ed34487d3ba8d7"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithRedirect(provider);
};