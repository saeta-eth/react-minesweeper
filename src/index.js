import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure';

import Routes from './routes';

import { cellStatus, ROW_NUMBER, COLS_NUMBER, CANT_POSITIONS, STOPWATCH_INITIAL_VALUE }  from './constants';
import { fillBombGrid, fillMultiArray, fillWarningNumbers, fillRandomBoolean } from './utils/grid';

import 'normalize.css';
import './index.css';

const positionBombs = fillRandomBoolean(CANT_POSITIONS, ROW_NUMBER);

const grid = fillMultiArray(ROW_NUMBER, COLS_NUMBER, {
  status: cellStatus.CELL_INITIAL,
  visibility: false,
})

const gridWithBomb = fillBombGrid(grid, positionBombs);

const gridWithWarningNumbers = fillWarningNumbers(
  gridWithBomb,
  positionBombs
);

const initialState = {
  config: { rows: ROW_NUMBER, cols: COLS_NUMBER },
  grid: gridWithWarningNumbers,
  stopwatch: { text: STOPWATCH_INITIAL_VALUE, seconds: 0, minutes: 0, hours: 0 }
}

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);