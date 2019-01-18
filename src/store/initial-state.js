import {
  cellStatus,
  ROW_BEGINNER,
  COL_BEGINNER,
  MINES_BEGINNER,
} from '../constants';

import fillMineGrid from '../utils/fill-mine-grid';
import fillMultiArray from '../utils/fill-multi-array';
import fillWarningNumbers from '../utils/fill-warning-numbers';
import fillRandomBoolean from '../utils/fill-random-boolean';

const initialState = () => {
  const POSITION_QUANTITY = MINES_BEGINNER * 2;

  const positionMines = fillRandomBoolean(POSITION_QUANTITY, ROW_BEGINNER);

  const grid = fillMultiArray(ROW_BEGINNER, COL_BEGINNER, {
    warning: 0,
    status: cellStatus.CELL_INITIAL,
  });

  const gridWithMines = fillMineGrid(grid, positionMines);

  const gridWithWarningNumbers = fillWarningNumbers(
    gridWithMines,
    positionMines
  );

  return {
    grid: {
      grid: gridWithWarningNumbers,
      rows: ROW_BEGINNER,
      cols: COL_BEGINNER,
      mines: MINES_BEGINNER,
      level: 'Beginner',
      date: Date.now(),
    },
  };
};

export default initialState;
