import { cellStatus } from '../constants';

const fillMineGrid = (grid, positionMines) => {
  for (let mine = 0; mine < positionMines.length; mine += 2) {
    const [col, row] = positionMines.slice(mine, mine + 2);
    grid[col][row].status = cellStatus.CELL_MINE;
  }

  return grid;
};

export default fillMineGrid;
