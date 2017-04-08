import { createConstants } from '../utils/constants.js';

const actionTypes = createConstants(
  'CHANGE_CONFIG',
  'RIGHT_CLICK_CELL',
  'RIGHT_CLICK_ON_BOMB',
  'LEFT_CLICK_CELL',
);

const cellStatus = createConstants(
  'CELL_INITIAL',
  'CELL_PRESSED',
  'CELL_BOMB',
  'CELL_FLAG',
  'CELL_BOMB_FLAG'
);

const ROW_NUMBER = 16;
const COLS_NUMBER = 16;
const CANT_POSITIONS = 80;

export {
  actionTypes,
  cellStatus,
  ROW_NUMBER,
  COLS_NUMBER,
  CANT_POSITIONS
}
