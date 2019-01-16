import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './global-style';
import configureStore from './store/configure';
import Routes from './routes';

import {
  cellStatus,
  ROW_BEGINNER,
  COL_BEGINNER,
  MINES_BEGINNER,
  STOPWATCH_INITIAL_VALUE,
} from './constants';

import fillMineGrid from './utils/fill-mine-grid';
import fillMultiArray from './utils/fill-multi-array';
import fillWarningNumbers from './utils/fill-warning-numbers';
import fillRandomBoolean from './utils/fill-random-boolean';

const POSITION_QUANTITY = MINES_BEGINNER * 2;

const positionMines = fillRandomBoolean(POSITION_QUANTITY, ROW_BEGINNER);

const grid = fillMultiArray(ROW_BEGINNER, COL_BEGINNER, {
  warning: 0,
  status: cellStatus.CELL_INITIAL,
});

const gridWithMines = fillMineGrid(grid, positionMines);

const gridWithWarningNumbers = fillWarningNumbers(gridWithMines, positionMines);

const initialState = {
  grid: {
    grid: gridWithWarningNumbers,
    rows: ROW_BEGINNER,
    cols: COL_BEGINNER,
    mines: MINES_BEGINNER,
    level: 'Beginner',
  },
  stopwatch: {
    text: STOPWATCH_INITIAL_VALUE,
    seconds: 0,
    minutes: 0,
    hours: 0,
  },
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Normalize />
    <GlobalStyle />
    <Routes />
  </Provider>,
  document.getElementById('root')
);
