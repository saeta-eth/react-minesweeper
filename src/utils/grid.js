import { cellStatus } from '../constants';

const deepClone =function deepClone(arr) {
  var len = arr.length;
  var newArr = new Array(len);
  for (var i=0; i<len; i++) {
    if (Array.isArray(arr[i])) {
      newArr[i] = deepClone(arr[i]);
    }
    else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

const fillRandomBoolean =  function fillRandomBoolean(bombs , max) {
  return Array.from({length: bombs}, () => Math.floor(Math.random() * max));
}

const fillMultiArray = function fillMultiArray(ROW_NUMBER, COLS_NUMBER, defaultValue) {
  // TODO: http://stackoverflow.com/q/43287528/1741027
  return Array.from(Array(ROW_NUMBER), 
     row => Array.from(Array(COLS_NUMBER), cell => Object(defaultValue) === defaultValue ? Object.assign({}, defaultValue) : defaultValue)
  );
}

const fillBombGrid = function fillBombGrid(grid, positionBombs) {
  for (let bomb = 0; bomb < (positionBombs.length / 2); bomb += 2) {
    const position = positionBombs.slice(bomb, bomb + 2);
    const col = position[0];
    const row = position[1];
    grid[col][row].status = cellStatus.CELL_BOMB;
  }
  return grid
}

const fillWarningNumbers = function fillWarningNumbers(grid, positionBombs) {
  // TODO: http://stackoverflow.com/a/2036743/1741027
  for (let bomb = 0; bomb < (positionBombs.length / 2); bomb += 2) {
    const position = positionBombs.slice(bomb, bomb + 2);
    const col = position[0];
    const row = position[1];
    // TOP
    if (typeof grid[col-1] !== 'undefined'
      && typeof grid[col-1][row-1] !== 'undefined'
      && grid[col-1][row-1].status !== cellStatus.CELL_BOMB) {
      grid[col-1][row-1].status = typeof grid[col-1][row-1].status === 'number' ? grid[col-1][row-1].status+1  : 1;
    }
    if (typeof grid[col][row-1] !== 'undefined'
      && grid[col][row-1].status !== cellStatus.CELL_BOMB) {
      grid[col][row-1].status = typeof grid[col][row-1].status === 'number' ? grid[col][row-1].status+1 : 1;
    }
    if (typeof grid[col+1] !== 'undefined'
      && typeof grid[col+1][row-1] !== 'undefined'
      && grid[col+1][row-1].status !== cellStatus.CELL_BOMB) { 
      grid[col+1][row-1].status = typeof grid[col+1][row-1].status === 'number' ? grid[col+1][row-1].status+1 : 1;
    }
    // MIDDLE
    if (typeof grid[col-1] !== 'undefined'
      && typeof grid[col-1][row] !== 'undefined'
      && grid[col-1][row].status !== cellStatus.CELL_BOMB) {
      grid[col-1][row].status = typeof grid[col-1][row].status === 'number' ? grid[col-1][row].status+1 : 1;
    }
    if (typeof grid[col+1] !== 'undefined'
      && typeof grid[col+1][row] !== 'undefined'
      && grid[col+1][row].status !== cellStatus.CELL_BOMB) {
      grid[col+1][row].status = typeof grid[col+1][row].status === 'number' ? grid[col+1][row].status+1 : 1;
    }
    // BOTTOM
    if (typeof grid[col-1] !== 'undefined'
      && typeof grid[col-1][row+1] !== 'undefined'
      && grid[col-1][row+1].status !== cellStatus.CELL_BOMB) {
      grid[col-1][row+1].status = typeof grid[col-1][row+1].status === 'number' ? grid[col-1][row+1].status+1 : 1;
    }
    if (typeof grid[col][row+1] !== 'undefined'
      && grid[col][row+1].status !== cellStatus.CELL_BOMB) {
      grid[col][row+1].status = typeof grid[col][row+1].status === 'number' ? grid[col][row+1].status+1 : 1;
    }
    if (typeof grid[col+1] !== 'undefined'
      && typeof grid[col+1][row+1] !== 'undefined'
      && grid[col+1][row+1].status !== cellStatus.CELL_BOMB) {
      grid[col+1][row+1].status = typeof grid[col+1][row+1].status === 'number' ? grid[col+1][row+1].status+1 : 1;
    }
  }
  return grid;
}

const findHowMuchExpand = function findHowMuchExpand(grid, col, row, value) {
  // TOP
  if (typeof grid[col-1] !== 'undefined'
    && typeof grid[col-1][row-1] !== 'undefined'
    && grid[col-1][row-1].status !== value
    && grid[col-1][row-1].status !== cellStatus.CELL_BOMB 
    && grid[col-1][row-1].status !== cellStatus.CELL_FLAG
    && grid[col-1][row-1].status !== cellStatus.CELL_BOMB_FLAG) {
    if (typeof grid[col-1][row-1].status === 'number') {
      grid[col-1][row-1].visibility = true;
    } else {
      grid[col-1][row-1].status = value;
      findHowMuchExpand(grid, col-1, row-1, value);
    }
  }
  if (typeof grid[col][row-1] !== 'undefined'
    && grid[col][row-1].status !== value
    && grid[col][row-1].status !== cellStatus.CELL_BOMB
    && grid[col][row-1].status !== cellStatus.CELL_FLAG
    && grid[col][row-1].status !== cellStatus.CELL_BOMB_FLAG) {
    if (typeof grid[col][row-1].status === 'number') {
      grid[col][row-1].visibility = true;
    } else {
      grid[col][row-1].status = value;
      findHowMuchExpand(grid, col, row-1, value);
    }
  }
  if (typeof grid[col+1] !== 'undefined'
    && typeof grid[col+1][row-1] !== 'undefined'
    && grid[col+1][row-1].status !== value
    && grid[col+1][row-1].status !== cellStatus.CELL_BOMB
    && grid[col+1][row-1].status !== cellStatus.CELL_FLAG
    && grid[col+1][row-1].status !== cellStatus.CELL_BOMB_FLAG) { 
    if (typeof grid[col+1][row-1].status === 'number') {
      grid[col+1][row-1].visibility = true;
    } else {
      grid[col+1][row-1].status = value;
      findHowMuchExpand(grid, col+1, row-1, value);
    }
  }
  // MIDDLE
  if (typeof grid[col-1] !== 'undefined'
    && typeof grid[col-1][row] !== 'undefined'
    && grid[col-1][row].status !== value
    && grid[col-1][row].status !== cellStatus.CELL_BOMB
    && grid[col-1][row].status !== cellStatus.CELL_FLAG
    && grid[col-1][row].status !== cellStatus.CELL_BOMB_FLAG) {
    if (typeof grid[col-1][row].status === 'number') {
      grid[col-1][row].visibility = true;
    } else {
      grid[col-1][row].status = value;
      findHowMuchExpand(grid, col-1, row, value);
    }
  }
  if (typeof grid[col+1] !== 'undefined'
    && typeof grid[col+1][row] !== 'undefined'
    && grid[col+1][row].status !== value
    && grid[col+1][row].status !== cellStatus.CELL_BOMB
    && grid[col+1][row].status !== cellStatus.CELL_FLAG
    && grid[col+1][row].status !== cellStatus.CELL_BOMB_FLAG) {
    if (typeof grid[col+1][row].status === 'number') {
      grid[col+1][row].visibility = true;
    } else {
      grid[col+1][row].status = value;
      findHowMuchExpand(grid, col+1, row, value);
    }
  }
  // BOTTOM
  if (typeof grid[col-1] !== 'undefined'
    && typeof grid[col-1][row+1] !== 'undefined'
    && grid[col-1][row+1].status !== value
    && grid[col-1][row+1].status !== cellStatus.CELL_BOMB
    && grid[col-1][row+1].status !== cellStatus.CELL_FLAG
    && grid[col-1][row+1].status !== cellStatus.CELL_BOMB_FLAG) {
    if (typeof grid[col-1][row+1].status === 'number') {
      grid[col-1][row+1].visibility = true;
    } else {
      grid[col-1][row+1].status = value;
      findHowMuchExpand(grid, col-1, row+1, value);
    }
  }
  if (typeof grid[col][row+1] !== 'undefined'
    && grid[col][row+1].status !== value
    && grid[col][row+1].status !== cellStatus.CELL_BOMB
    && grid[col][row+1].status !== cellStatus.CELL_FLAG
    && grid[col][row+1].status !== cellStatus.CELL_BOMB_FLAG) {
    if (typeof grid[col][row+1].status === 'number') {
      grid[col][row+1].visibility = true;
    } else {
      grid[col][row+1].status = value;
      findHowMuchExpand(grid, col, row+1, value);
    }
  }
  if (typeof grid[col+1] !== 'undefined'
    && typeof grid[col+1][row+1] !== 'undefined'
    && grid[col+1][row+1].status !== value
    && grid[col+1][row+1].status !== cellStatus.CELL_BOMB
    && grid[col+1][row+1].status !== cellStatus.CELL_FLAG
    && grid[col+1][row+1].status !== cellStatus.CELL_BOMB_FLAG) {
    if (typeof grid[col+1][row+1].status === 'number') {
      grid[col+1][row+1].visibility = true;
    } else {
      grid[col+1][row+1].status = value;
      findHowMuchExpand(grid, col+1, row+1, value);
    }
  }
  return grid
}

export {
  fillRandomBoolean,
  fillMultiArray,
  fillBombGrid,
  fillWarningNumbers,
  findHowMuchExpand,
  deepClone
}