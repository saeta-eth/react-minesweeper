import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configure';

import { cellStatus, ROW_NUMBER, COLS_NUMBER, CANT_POSITIONS }  from './constants';
import { fillBombGrid, fillMultiArray, fillWarningNumbers, fillRandomBoolean } from './utils/grid';

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
  grid: gridWithWarningNumbers
}

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);