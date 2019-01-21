import { cellStatus } from '../constants';

const fillWarningNumbers = (grid, mines) => {
  // https://stackoverflow.com/a/2036743/1741027
  for (const [col, row] of mines) {
    // TOP
    if (
      typeof grid[col - 1] !== 'undefined' &&
      typeof grid[col - 1][row - 1] !== 'undefined' &&
      grid[col - 1][row - 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col - 1][row - 1].warning += 1;
    }
    if (
      typeof grid[col][row - 1] !== 'undefined' &&
      grid[col][row - 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col][row - 1].warning += 1;
    }
    if (
      typeof grid[col + 1] !== 'undefined' &&
      typeof grid[col + 1][row - 1] !== 'undefined' &&
      grid[col + 1][row - 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col + 1][row - 1].warning += 1;
    }
    // MIDDLE
    if (
      typeof grid[col - 1] !== 'undefined' &&
      typeof grid[col - 1][row] !== 'undefined' &&
      grid[col - 1][row].status !== cellStatus.CELL_MINE
    ) {
      grid[col - 1][row].warning += 1;
    }
    if (
      typeof grid[col + 1] !== 'undefined' &&
      typeof grid[col + 1][row] !== 'undefined' &&
      grid[col + 1][row].status !== cellStatus.CELL_MINE
    ) {
      grid[col + 1][row].warning += 1;
    }
    // BOTTOM
    if (
      typeof grid[col - 1] !== 'undefined' &&
      typeof grid[col - 1][row + 1] !== 'undefined' &&
      grid[col - 1][row + 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col - 1][row + 1].warning += 1;
    }
    if (
      typeof grid[col][row + 1] !== 'undefined' &&
      grid[col][row + 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col][row + 1].warning += 1;
    }
    if (
      typeof grid[col + 1] !== 'undefined' &&
      typeof grid[col + 1][row + 1] !== 'undefined' &&
      grid[col + 1][row + 1].status !== cellStatus.CELL_MINE
    ) {
      grid[col + 1][row + 1].warning += 1;
    }
  }

  return grid;
};

export default fillWarningNumbers;
