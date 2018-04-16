import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import * as firebase from 'firebase';
import reducers, { IState } from '../modules';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  presence: 'presence',
  sessions: 'sessions',
};

const firebaseConfig = {
  apiKey: "AIzaSyBZD2HElmB0lkAida-g0bKDCiye6AZ26ME",
  authDomain: "react-electron-firebase.firebaseapp.com",
  databaseURL: "https://react-electron-firebase.firebaseio.com",
  projectId: "react-electron-firebase",
  storageBucket: "react-electron-firebase.appspot.com",
  messagingSenderId: "105779943102"
};

firebase.initializeApp(firebaseConfig);

const middlewares: any[] = [thunkMiddleware.withExtraArgument(getFirebase)];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(
  applyMiddleware(...middlewares),
  reactReduxFirebase(firebase, rrfConfig),
);

const store = createStore(reducers, middleware);

export default store;


type ThunkAction2<R> = ThunkAction<R, IState, void>;
export type ThunkActionCreator<R> = (...args: any[]) => ThunkAction2<R>;
