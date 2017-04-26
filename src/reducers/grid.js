import { actionTypes, cellStatus } from '../constants';
import { deepClone, findHowMuchExpand, fillMineGrid, fillMultiArray, fillWarningNumbers, fillRandomBoolean } from '../utils/grid';

export default (state = [], action) => {
  let previousState = deepClone(state instanceof Array ? state: state.grid);
  switch (action.type) {
    case actionTypes.LEFT_CLICK_CELL:
      console.log('status', previousState[action.col][action.row]);
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
      const CANT_POSITIONS = action.mines * 2;
      const positionMines = fillRandomBoolean(CANT_POSITIONS, action.rows);
      const grid = fillMultiArray(action.rows, action.cols, {
        warning: 0,
        status: cellStatus.CELL_INITIAL,
        visibility: false
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