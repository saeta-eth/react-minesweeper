import config from './config.js';
import grid from './grid.js';
import stopwatch from './stopwatch';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  config,
  grid,
  stopwatch
});

export default rootReducer;