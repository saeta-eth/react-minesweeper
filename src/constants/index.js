import { createConstants } from '../utils/constants.js';

const actionTypes = createConstants(
  'CHANGE_CONFIG',
  'RIGHT_CLICK_CELL',
  'RIGHT_CLICK_ON_BOMB',
  'LEFT_CLICK_CELL',
  'NEW_GRID',
  'NEW_STOPWATCH',
  'UPDATE_STOPWATCH'
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
const STOPWATCH_INITIAL_VALUE = '00:00:00';

export {
  actionTypes,
  cellStatus,
  ROW_NUMBER,
  COLS_NUMBER,
  CANT_POSITIONS,
  STOPWATCH_INITIAL_VALUE
}
