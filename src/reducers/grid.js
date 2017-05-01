import { actionTypes, cellStatus } from '../constants';
import { deepClone, findHowMuchExpand, fillMineGrid, fillMultiArray, fillWarningNumbers, fillRandomBoolean } from '../utils/grid';

export default (state = [], action) => {
  let previousState = deepClone(state instanceof Array ? state: state.grid);
  switch (action.type) {
    case actionTypes.LEFT_CLICK_CELL:
      previousState[action.col][action.row].status = action.value;
      previousState[action.col][action.row].visibility = true;
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
      const POSITION_QUANTITY = action.mines * 2;
      const positionMines = fillRandomBoolean(POSITION_QUANTITY, action.rows);
      const grid = fillMultiArray(action.rows, action.cols, {
        warning: 0,
        status: cellStatus.CELL_INITIAL
      });
      const gridWithMines = fillMineGrid(grid, positionMines);
      const gridWithWarningNumbers = fillWarningNumbers(
        gridWithMines,
        positionMines
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