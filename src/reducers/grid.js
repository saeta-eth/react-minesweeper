import isEmpty from 'lodash.isempty';
import cloneDeep from 'lodash.clonedeep';

import { actionTypes, cellStatus } from '../constants';

import expand from '../utils/expand';
import fillMineGrid from '../utils/fill-mine-grid';
import fillMultiArray from '../utils/fill-multi-array';
import fillWarningNumbers from '../utils/fill-warning-numbers';
import fillRandomBoolean from '../utils/fill-random-boolean';

const grid = (state = [], action) => {
  if (isEmpty(state)) return state;

  let previousState = cloneDeep(state.grid);

  switch (action.type) {
    case actionTypes.LEFT_CLICK_CELL: {
      previousState[action.col][action.row].status = action.value;
      previousState = expand(
        previousState,
        action.col,
        action.row,
        action.value
      );
      return Object.assign({}, state, {
        grid: previousState,
      });
    }

    case actionTypes.RIGHT_CLICK_CELL: {
      previousState[action.col][action.row].status = action.value;
      return Object.assign({}, state, {
        grid: previousState,
      });
    }

    case actionTypes.NEW_GRID: {
      const POSITION_QUANTITY = action.mines * 2;
      const positionMines = fillRandomBoolean(POSITION_QUANTITY, action.rows);
      const grid = fillMultiArray(action.rows, action.cols, {
        warning: 0,
        status: cellStatus.CELL_INITIAL,
      });
      const gridWithMines = fillMineGrid(grid, positionMines);
      const gridWithWarningNumbers = fillWarningNumbers(
        gridWithMines,
        positionMines
      );
      return Object.assign(
        {},
        {
          grid: gridWithWarningNumbers,
          cols: action.cols,
          rows: action.rows,
          mines: action.mines,
          level: action.level,
          date: Date.now(),
        }
      );
    }

    default: {
      return state;
    }
  }
};

export default grid;
