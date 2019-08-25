import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

export default () => <Route exact path="/" component={HomePage} />;
