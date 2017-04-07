import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configure';

import { ROW_NUMBER, COLS_NUMBER, checkboxFlow, CANT_POSITIONS }  from './constants';
import { fillBombGrid, fillMultiArray } from './utils/grid';

const bomb = fillBombGrid(CANT_POSITIONS, ROW_NUMBER, COLS_NUMBER);
const grid = fillMultiArray(ROW_NUMBER, COLS_NUMBER, checkboxFlow.CHECKBOX_INITIAL);

const initialState = {
  config: { rows: ROW_NUMBER, cols: COLS_NUMBER },
  bomb: bomb,
  grid: grid
}

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);