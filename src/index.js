import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configure';

import { ROW_NUMBER, COLS_NUMBER, checkboxFlow, CANT_POSITIONS }  from './constants';
import { fillBombGrid, fillMultiArray, fillWarningNumbers, fillRandomBoolean } from './utils/grid';


const positionBombs = fillRandomBoolean(CANT_POSITIONS, ROW_NUMBER);
const bomb = fillBombGrid(positionBombs, ROW_NUMBER, COLS_NUMBER);

const gridWithWarningNumbers = fillWarningNumbers(
  fillMultiArray(ROW_NUMBER, COLS_NUMBER, {
    status: checkboxFlow.CHECKBOX_INITIAL,
    visibility: false,
  }),
  positionBombs
);

console.log('gridWithWarningNumbers', gridWithWarningNumbers)

const initialState = {
  config: { rows: ROW_NUMBER, cols: COLS_NUMBER },
  bomb: bomb,
  grid: gridWithWarningNumbers
}

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);