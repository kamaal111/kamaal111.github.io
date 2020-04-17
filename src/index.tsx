import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';
import './index.css';

const root = document.querySelector('#root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root,
);

serviceWorker.unregister();
