import { actionTypes } from '../constants';

const leftClickGrid = (col, row, value) => ({
  type: actionTypes.LEFT_CLICK_CELL,
  col,
  row,
  value,
});

const rightClickGrid = (col, row, value) => ({
  type: actionTypes.RIGHT_CLICK_CELL,
  col,
  row,
  value,
});

const newGrid = (cols, rows, mines, level) => ({
  type: actionTypes.NEW_GRID,
  cols,
  rows,
  mines,
  level,
});

export { newGrid, rightClickGrid, leftClickGrid };
