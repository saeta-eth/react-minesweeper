import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import * as actionCreators from '../actions';
import rootReducer from '../reducers';

import { loadState, saveState } from '../utils/local-storage';

const isDev = process.env.NODE_ENV === 'development';

const configure = initialState => {
  const persistedState = loadState(initialState);

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
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export default configure;
