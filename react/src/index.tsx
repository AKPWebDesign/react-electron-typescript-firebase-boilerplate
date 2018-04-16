import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './utils/store';
import { ActionCreators } from './modules';
import './index.css';

const isElectron = require('is-electron');

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

// enable electron accelerators if available. TODO: Move this somewhere else
if (isElectron()) {
  const { ipcRenderer } = require('electron');
  ipcRenderer.on('accelerator-plus', () => {
    store.dispatch(ActionCreators.example.incrementCounter());
  });
  ipcRenderer.on('accelerator-minus', () => {
    store.dispatch(ActionCreators.example.decrementCounter());
  });
  ipcRenderer.on('accelerator-reset', () => {
    store.dispatch(ActionCreators.example.resetCounter());
  });
}
