import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  //apiKey: 
  //authDomain: 
  //databaseURL:
  //projectId: 
  //storageBucket: 
  //messagingSenderId: 
  //appId: 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase };
