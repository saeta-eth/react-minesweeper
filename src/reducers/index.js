import { combineReducers } from 'redux';

import grid from './grid';
import stopwatch from './stopwatch';

const rootReducer = combineReducers({
  grid,
  stopwatch,
});

export default rootReducer;
