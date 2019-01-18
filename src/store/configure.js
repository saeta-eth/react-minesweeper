import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import * as actionCreators from '../actions';
import rootReducer from '../reducers';

import initialState from './initial-state';

const isDev = process.env.NODE_ENV === 'development';

const configure = () => {
  const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
  });

  const middlewares = [thunkMiddleware];

  if (isDev) {
    // eslint-disable-next-line
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState(),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export default configure;
