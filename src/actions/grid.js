import { actionTypes } from '../constants';

export const changeGrid = (col, row, value) => {
  return {
    type: actionTypes.CHANGE_GRID,
    col: col,
    row: row,
    value: value
  };
}