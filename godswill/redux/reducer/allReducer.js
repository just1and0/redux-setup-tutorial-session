import {counterReducer} from './counterReducer';

import {combineReducers} from 'redux';

export const allReducers = combineReducers({
  counter: counterReducer,
});
