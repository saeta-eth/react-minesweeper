import config from './config.js';
import grid from './grid.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  config,
  grid,
  bomb: (state = {}) => state,
});

export default rootReducer;