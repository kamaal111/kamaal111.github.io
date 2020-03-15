import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';

const NotFoundPage = () => <h3>404 - Not found</h3>;

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route component={NotFoundPage} />
  </Switch>
);
