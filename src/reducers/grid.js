import { actionTypes } from '../constants';
import { deepClone, findHowMuchExpand, fillBombGrid, fillMultiArray, fillWarningNumbers, fillRandomBoolean } from '../utils/grid';
import { cellStatus }  from '../constants';

export default (state = [], action) => {
  let previousState = deepClone(state instanceof Array ? state: state.grid);
  switch (action.type) {
    case actionTypes.LEFT_CLICK_CELL:
      previousState[action.col][action.row].status = action.value;
      previousState = findHowMuchExpand(previousState, action.col, action.row, action.value);
      return Object.assign(state, {
        grid: previousState
      });
    case actionTypes.RIGHT_CLICK_CELL:
      previousState[action.col][action.row].status = action.value;
      return Object.assign(state, {
        grid: previousState
      });
    case actionTypes.NEW_GRID:
      const CANT_POSITIONS = action.mines * 2;
      const positionBombs = fillRandomBoolean(CANT_POSITIONS, action.rows);
      const grid = fillMultiArray(action.rows, action.cols, {
        status: cellStatus.CELL_INITIAL,
        visibility: false,
      });
      const gridWithBomb = fillBombGrid(grid, positionBombs);
      const gridWithWarningNumbers = fillWarningNumbers(
        gridWithBomb,
        positionBombs
      );
      return Object.assign({}, { 
        grid: gridWithWarningNumbers,
        cols: action.cols,
        rows: action.rows,
        mines: action.mines,
        level: action.level
      });
    default:
      return state;
  }
};