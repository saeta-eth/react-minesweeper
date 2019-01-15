import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const configure = initialState => {
  const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : initialState;
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  });

  return store;
};

export default configure;
