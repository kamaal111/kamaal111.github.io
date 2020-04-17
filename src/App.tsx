import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC<{}> = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default App;
