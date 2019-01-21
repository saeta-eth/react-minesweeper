import createConstants from '../utils/create-constants';

const actionTypes = createConstants(
  'CHANGE_CONFIG',
  'RIGHT_CLICK_CELL',
  'RIGHT_CLICK_ON_MINE',
  'LEFT_CLICK_CELL',
  'NEW_GRID',
  'SET_GRID',
  'SET_MINES_QUANTITY'
);

const cellStatus = createConstants(
  'CELL_INITIAL',
  'CELL_PRESSED',
  'CELL_MINE',
  'CELL_FLAG',
  'CELL_MINE_FLAG',
  'CELL_QUESTION_MARK',
  'CELL_MINE_CELL_QUESTION_MARK'
);

const COL_BEGINNER = 8;
const ROW_BEGINNER = 8;
const MINES_BEGINNER = 10;

const COL_INTERMEDIATE = 16;
const ROW_INTERMEDIATE = 16;
const MINES_INTERMEDIATE = 40;

const COL_EXPERT = 16;
const ROW_EXPERT = 16;
const MINES_EXPERT = 50;

export {
  actionTypes,
  cellStatus,
  COL_BEGINNER,
  ROW_BEGINNER,
  MINES_BEGINNER,
  COL_INTERMEDIATE,
  ROW_INTERMEDIATE,
  MINES_INTERMEDIATE,
  COL_EXPERT,
  ROW_EXPERT,
  MINES_EXPERT,
};
