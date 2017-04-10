import grid from './grid.js';
import stopwatch from './stopwatch';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  grid,
  stopwatch
});

export default rootReducer;