import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import { firebase } from './firebase/firebase';
import { startSetActivities } from './actions/activity';
import { login, logout } from './actions/auth';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(jsx, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetActivities());
    renderApp();
    if (history.location.pathname === '/login') {
      history.push('/');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/login');
  }
});
