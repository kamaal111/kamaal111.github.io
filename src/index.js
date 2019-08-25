import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './styles/css/index.css';

const root = document.querySelector('#root');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root,
);

serviceWorker.unregister();
