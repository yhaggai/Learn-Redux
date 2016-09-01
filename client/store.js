'use strict'

import { createStore, compose } from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducer/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = { posts, comments };

const store = createStore(rootReducer, defaultState);

// what does it mean exactly
export const history = syncHistoryWithStore(browserHistory, store);

export default store;




