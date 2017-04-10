import { actionTypes } from '../constants';

export const leftClickGrid = (col, row, value) => {
  return {
    type: actionTypes.LEFT_CLICK_CELL,
    col: col,
    row: row,
    value: value
  };
}

export const rightClickGrid = (col, row, value) => {
  return {
    type: actionTypes.RIGHT_CLICK_CELL,
    col: col,
    row: row,
    value: value
  };
}

export const newGrid = (cols, rows, mines, level) => {
  return {
    type: actionTypes.NEW_GRID,
    cols: cols,
    rows: rows,
    mines: mines,
    level: level
  };
}
