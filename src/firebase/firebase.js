import * as firebase from 'firebase';
import { apiKey } from './apiKey';

const config = {
  apiKey,
  authDomain: 'timevisualizer.firebaseapp.com',
  databaseURL: 'https://timevisualizer.firebaseio.com',
  projectId: 'timevisualizer',
  storageBucket: 'timevisualizer.appspot.com',
  messagingSenderId: '509152285070',
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
