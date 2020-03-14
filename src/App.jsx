import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Projects from './pages/Projects';

const NotFoundPage = () => <h3>404 - Not found</h3>;

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/projects" component={Projects} />
    <Route component={NotFoundPage} />
  </Switch>
);
