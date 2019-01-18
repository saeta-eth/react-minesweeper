import { cellStatus } from '../constants';

const fillMineGrid = (grid, positionMines) => {
  // http://stackoverflow.com/a/2036743/1741027
  for (let mine = 0; mine < positionMines.length; mine += 2) {
    const [col, row] = positionMines.slice(mine, mine + 2);
    // TOP
    if (
      typeof grid[col - 1] !== 'undefined' &&
      typeof grid[col - 1][row - 1] !== 'undefined' &&
      grid[col - 1][row - 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col - 1][row - 1].warning++;
    }
    if (
      typeof grid[col][row - 1] !== 'undefined' &&
      grid[col][row - 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col][row - 1].warning++;
    }
    if (
      typeof grid[col + 1] !== 'undefined' &&
      typeof grid[col + 1][row - 1] !== 'undefined' &&
      grid[col + 1][row - 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col + 1][row - 1].warning++;
    }
    // MIDDLE
    if (
      typeof grid[col - 1] !== 'undefined' &&
      typeof grid[col - 1][row] !== 'undefined' &&
      grid[col - 1][row].status !== cellStatus.CELL_MINE
    ) {
      grid[col - 1][row].warning++;
    }
    if (
      typeof grid[col + 1] !== 'undefined' &&
      typeof grid[col + 1][row] !== 'undefined' &&
      grid[col + 1][row].status !== cellStatus.CELL_MINE
    ) {
      grid[col + 1][row].warning++;
    }
    // BOTTOM
    if (
      typeof grid[col - 1] !== 'undefined' &&
      typeof grid[col - 1][row + 1] !== 'undefined' &&
      grid[col - 1][row + 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col - 1][row + 1].warning++;
    }
    if (
      typeof grid[col][row + 1] !== 'undefined' &&
      grid[col][row + 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col][row + 1].warning++;
    }
    if (
      typeof grid[col + 1] !== 'undefined' &&
      typeof grid[col + 1][row + 1] !== 'undefined' &&
      grid[col + 1][row + 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col + 1][row + 1].warning++;
    }
  }
  return grid;
};

export default fillMineGrid;
