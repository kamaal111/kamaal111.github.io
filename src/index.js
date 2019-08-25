import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import * as serviceWorker from './serviceWorker';
import store from './store';

import './styles/css/index.css';

const root = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  root,
);

serviceWorker.unregister();
