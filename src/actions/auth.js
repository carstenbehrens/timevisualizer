import * as types from '../constants/ActionTypes';
import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

export const startLoginEmail = (email, password) => () => {
  if (email && password !== '') {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
};

export const login = uid => ({
  type: types.LOGIN,
  payload: uid,
});

export const startLogout = () => () => firebase.auth().signOut();

export const logout = () => ({
  type: types.LOGOUT,
});
