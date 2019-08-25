import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Projects from './pages/Projects';

export default () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/projects" component={Projects} />
  </>
);
