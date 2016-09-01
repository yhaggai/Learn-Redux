// this is the main reducer

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootRedcuer = combineReducers({posts, comments, router: routerReducer })