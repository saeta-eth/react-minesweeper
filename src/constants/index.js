import { createConstants } from '../utils/constants.js';

const actionTypes = createConstants(
  'CHANGE_CONFIG',
  'CHANGE_GRID',
);

const checkboxFlow = createConstants(
  'CHECKBOX_INITIAL',
  'CHECKBOX_PRESSED',
  'CHECKBOX_FLAG',
);

const ROW_NUMBER = 16;
const COLS_NUMBER = 16;

const CANT_POSITIONS = 80;

export {
  actionTypes,
  checkboxFlow,
  ROW_NUMBER,
  COLS_NUMBER,
  CANT_POSITIONS
}
