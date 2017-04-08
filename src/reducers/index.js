import config from './config.js';
import grid from './grid.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  config,
  grid
});

export default rootReducer;