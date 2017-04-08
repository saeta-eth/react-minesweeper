import { actionTypes } from '../constants';
import { deepClone, findHowMuchExpand, fillBombGrid, fillMultiArray, fillWarningNumbers, fillRandomBoolean } from '../utils/grid';
import { cellStatus, ROW_NUMBER, COLS_NUMBER, CANT_POSITIONS }  from '../constants';

export default (state = [], action) => {
  let previousState = deepClone(state);
  switch (action.type) {
    case actionTypes.LEFT_CLICK_CELL:
      previousState[action.col][action.row].status = action.value;
      previousState = findHowMuchExpand(previousState, action.col, action.row, action.value);
      return previousState;
    case actionTypes.RIGHT_CLICK_CELL:
      previousState[action.col][action.row].status = action.value;
      return previousState;
    case actionTypes.NEW_GRID:
      const positionBombs = fillRandomBoolean(CANT_POSITIONS, ROW_NUMBER);
      const grid = fillMultiArray(ROW_NUMBER, COLS_NUMBER, {
        status: cellStatus.CELL_INITIAL,
        visibility: false,
      });
      const gridWithBomb = fillBombGrid(grid, positionBombs);
      const gridWithWarningNumbers = fillWarningNumbers(
        gridWithBomb,
        positionBombs
      );
      return gridWithWarningNumbers;
    default:
      return state;
  }
};