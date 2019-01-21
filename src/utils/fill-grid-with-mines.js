import { cellStatus } from '../constants';

const fillMineGrid = (grid, mines) => {
  for (const [col, row] of mines) {
    grid[col][row].status = cellStatus.CELL_MINE;
  }

  return grid;
};

export default fillMineGrid;
