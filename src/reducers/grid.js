import isEmpty from 'lodash.isempty';
import cloneDeep from 'lodash.clonedeep';

import { actionTypes, cellStatus } from '../constants';

import getMinesPosition from '../utils/get-mines-position';
import fillGridWithInitialValues from '../utils/fill-grid-with-initial-values';
import fillGridWithMines from '../utils/fill-grid-with-mines';
import fillWarningNumbers from '../utils/fill-warning-numbers';
import expand from '../utils/expand';

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
      const mines = getMinesPosition(action.mines, action.rows);

      const initialGrid = fillGridWithInitialValues(action.rows, action.cols, {
        warning: 0,
        status: cellStatus.CELL_INITIAL,
      });

      const gridWithMines = fillGridWithMines(initialGrid, mines);

      const gridWithWarningNumbers = fillWarningNumbers(gridWithMines, mines);

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
