import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBURTAXm_EN-3sIYW77KUVCOvtO80qnR4E',
  authDomain: 'react-blog-app-c51df.firebaseapp.com',
  databaseURL: 'https://react-blog-app-c51df.firebaseio.com',
  projectId: 'react-blog-app-c51df',
  storageBucket: 'react-blog-app-c51df.appspot.com',
  messagingSenderId: '412160962006',
  appId: '1:412160962006:web:999206d96949f6190dc877',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase };
