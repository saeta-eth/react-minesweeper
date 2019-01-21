import {
  cellStatus,
  ROW_BEGINNER,
  COL_BEGINNER,
  MINES_BEGINNER,
} from '../constants';

import getMinesPosition from '../utils/get-mines-position';
import fillGridWithInitialValues from '../utils/fill-grid-with-initial-values';
import fillGridWithMines from '../utils/fill-grid-with-mines';
import fillWarningNumbers from '../utils/fill-warning-numbers';

const initialState = () => {
  const mines = getMinesPosition(MINES_BEGINNER, ROW_BEGINNER);

  const initialGrid = fillGridWithInitialValues(ROW_BEGINNER, COL_BEGINNER, {
    warning: 0,
    status: cellStatus.CELL_INITIAL,
  });

  const gridWithMines = fillGridWithMines(initialGrid, mines);

  const gridWithWarningNumbers = fillWarningNumbers(gridWithMines, mines);

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
