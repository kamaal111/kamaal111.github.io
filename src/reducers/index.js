import { combineReducers } from 'redux';

import repos from './repos';

import errors from './errors';

export default combineReducers({ repos, errors });
