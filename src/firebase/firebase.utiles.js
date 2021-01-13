import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB255zUFX7pwvkItO_DujONCI8rpo2wnDE",
  authDomain: "crwn-db-cf088.firebaseapp.com",
  projectId: "crwn-db-cf088",
  storageBucket: "crwn-db-cf088.appspot.com",
  messagingSenderId: "269923809422",
  appId: "1:269923809422:web:6e8d8103306c41790eb1df",
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;