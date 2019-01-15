import { cellStatus } from '../constants';

const expand = (grid, col, row, value) => {
  // TOP
  if (
    typeof grid[col - 1] !== 'undefined' &&
    typeof grid[col - 1][row - 1] !== 'undefined' &&
    grid[col - 1][row - 1].status !== value &&
    grid[col - 1][row - 1].status !== cellStatus.CELL_MINE &&
    grid[col - 1][row - 1].status !== cellStatus.CELL_FLAG &&
    grid[col - 1][row - 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    grid[col - 1][row - 1].status = value;
    if (grid[col - 1][row - 1].warning === 0) {
      expand(grid, col - 1, row - 1, value);
    }
  }

  if (
    typeof grid[col][row - 1] !== 'undefined' &&
    grid[col][row - 1].status !== value &&
    grid[col][row - 1].status !== cellStatus.CELL_MINE &&
    grid[col][row - 1].status !== cellStatus.CELL_FLAG &&
    grid[col][row - 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    grid[col][row - 1].status = value;
    if (grid[col][row - 1].warning === 0) {
      expand(grid, col, row - 1, value);
    }
  }

  if (
    typeof grid[col + 1] !== 'undefined' &&
    typeof grid[col + 1][row - 1] !== 'undefined' &&
    grid[col + 1][row - 1].status !== value &&
    grid[col + 1][row - 1].status !== cellStatus.CELL_MINE &&
    grid[col + 1][row - 1].status !== cellStatus.CELL_FLAG &&
    grid[col + 1][row - 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    grid[col + 1][row - 1].status = value;
    if (grid[col + 1][row - 1].warning === 0) {
      expand(grid, col + 1, row - 1, value);
    }
  }
  // MIDDLE
  if (
    typeof grid[col - 1] !== 'undefined' &&
    typeof grid[col - 1][row] !== 'undefined' &&
    grid[col - 1][row].status !== value &&
    grid[col - 1][row].status !== cellStatus.CELL_MINE &&
    grid[col - 1][row].status !== cellStatus.CELL_FLAG &&
    grid[col - 1][row].status !== cellStatus.CELL_MINE_FLAG
  ) {
    grid[col - 1][row].status = value;
    if (grid[col - 1][row].warning === 0) {
      expand(grid, col - 1, row, value);
    }
  }

  if (
    typeof grid[col + 1] !== 'undefined' &&
    typeof grid[col + 1][row] !== 'undefined' &&
    grid[col + 1][row].status !== value &&
    grid[col + 1][row].status !== cellStatus.CELL_MINE &&
    grid[col + 1][row].status !== cellStatus.CELL_FLAG &&
    grid[col + 1][row].status !== cellStatus.CELL_MINE_FLAG
  ) {
    grid[col + 1][row].status = value;
    if (grid[col + 1][row].warning === 0) {
      expand(grid, col + 1, row, value);
    }
  }
  // BOTTOM
  if (
    typeof grid[col - 1] !== 'undefined' &&
    typeof grid[col - 1][row + 1] !== 'undefined' &&
    grid[col - 1][row + 1].status !== value &&
    grid[col - 1][row + 1].status !== cellStatus.CELL_MINE &&
    grid[col - 1][row + 1].status !== cellStatus.CELL_FLAG &&
    grid[col - 1][row + 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    grid[col - 1][row + 1].status = value;
    if (grid[col - 1][row + 1].warning === 0) {
      expand(grid, col - 1, row + 1, value);
    }
  }

  if (
    typeof grid[col][row + 1] !== 'undefined' &&
    grid[col][row + 1].status !== value &&
    grid[col][row + 1].status !== cellStatus.CELL_MINE &&
    grid[col][row + 1].status !== cellStatus.CELL_FLAG &&
    grid[col][row + 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    grid[col][row + 1].status = value;
    if (grid[col][row + 1].warning === 0) {
      expand(grid, col, row + 1, value);
    }
  }

  if (
    typeof grid[col + 1] !== 'undefined' &&
    typeof grid[col + 1][row + 1] !== 'undefined' &&
    grid[col + 1][row + 1].status !== value &&
    grid[col + 1][row + 1].status !== cellStatus.CELL_MINE &&
    grid[col + 1][row + 1].status !== cellStatus.CELL_FLAG &&
    grid[col + 1][row + 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    grid[col + 1][row + 1].status = value;
    if (grid[col + 1][row + 1].warning === 0) {
      expand(grid, col + 1, row + 1, value);
    }
  }
  return grid;
};

export default expand;
