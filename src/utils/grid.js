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

const fillRandomBoolean =  function fillRandomBoolean(mines , max) {
  return Array.from({length: mines}, () => Math.floor(Math.random() * max));
}

const fillMultiArray = function fillMultiArray(ROW_NUMBER, COLS_NUMBER, defaultValue) {
  // TODO: http://stackoverflow.com/q/43287528/1741027
  return Array.from(Array(ROW_NUMBER), 
     row => Array.from(Array(COLS_NUMBER), cell => Object(defaultValue) === defaultValue ? Object.assign({}, defaultValue) : defaultValue)
  );
}

const fillMineGrid = function fillMineGrid(grid, positionMines) {
  for (let mine = 0; mine < (positionMines.length / 2); mine += 2) {
    const position = positionMines.slice(mine, mine + 2);
    const col = position[0];
    const row = position[1];
    grid[col][row].status = cellStatus.CELL_MINE;
  }
  return grid
}

const fillWarningNumbers = function fillWarningNumbers(grid, positionMines) {
  // TODO: http://stackoverflow.com/a/2036743/1741027
  for (let mine = 0; mine < (positionMines.length / 2); mine += 2) {
    const position = positionMines.slice(mine, mine + 2);
    const col = position[0];
    const row = position[1];
    // TOP
    if (typeof grid[col-1] !== 'undefined'
      && typeof grid[col-1][row-1] !== 'undefined'
      && grid[col-1][row-1].status !== cellStatus.CELL_MINE) {
      grid[col-1][row-1].warning++;
    }
    if (typeof grid[col][row-1] !== 'undefined'
      && grid[col][row-1].status !== cellStatus.CELL_MINE) {
      grid[col][row-1].warning++
    }
    if (typeof grid[col+1] !== 'undefined'
      && typeof grid[col+1][row-1] !== 'undefined'
      && grid[col+1][row-1].status !== cellStatus.CELL_MINE) { 
      grid[col+1][row-1].warning++;
    }
    // MIDDLE
    if (typeof grid[col-1] !== 'undefined'
      && typeof grid[col-1][row] !== 'undefined'
      && grid[col-1][row].status !== cellStatus.CELL_MINE) {
      grid[col-1][row].warning++;
    }
    if (typeof grid[col+1] !== 'undefined'
      && typeof grid[col+1][row] !== 'undefined'
      && grid[col+1][row].status !== cellStatus.CELL_MINE) {
      grid[col+1][row].warning++;
    }
    // BOTTOM
    if (typeof grid[col-1] !== 'undefined'
      && typeof grid[col-1][row+1] !== 'undefined'
      && grid[col-1][row+1].status !== cellStatus.CELL_MINE) {
      grid[col-1][row+1].warning++;
    }
    if (typeof grid[col][row+1] !== 'undefined'
      && grid[col][row+1].status !== cellStatus.CELL_MINE) {
      grid[col][row+1].warning++;
    }
    if (typeof grid[col+1] !== 'undefined'
      && typeof grid[col+1][row+1] !== 'undefined'
      && grid[col+1][row+1].status !== cellStatus.CELL_MINE) {
      grid[col+1][row+1].warning++;
    }
  }
  return grid;
}

const findHowMuchExpand = function findHowMuchExpand(grid, col, row, value) {
  // TOP
  if (typeof grid[col-1] !== 'undefined'
    && typeof grid[col-1][row-1] !== 'undefined'
    && grid[col-1][row-1].status !== value
    && grid[col-1][row-1].status !== cellStatus.CELL_MINE 
    && grid[col-1][row-1].status !== cellStatus.CELL_FLAG
    && grid[col-1][row-1].status !== cellStatus.CELL_MINE_FLAG) {
    if (typeof grid[col-1][row-1].warning > 0) {
      grid[col-1][row-1].visibility = true;
    } else {
      grid[col-1][row-1].status = value;
      findHowMuchExpand(grid, col-1, row-1, value);
    }
  }
  if (typeof grid[col][row-1] !== 'undefined'
    && grid[col][row-1].status !== value
    && grid[col][row-1].status !== cellStatus.CELL_MINE
    && grid[col][row-1].status !== cellStatus.CELL_FLAG
    && grid[col][row-1].status !== cellStatus.CELL_MINE_FLAG) {
    if (grid[col][row-1].warning > 0) {
      grid[col][row-1].visibility = true;
    } else {
      grid[col][row-1].status = value;
      findHowMuchExpand(grid, col, row-1, value);
    }
  }
  if (typeof grid[col+1] !== 'undefined'
    && typeof grid[col+1][row-1] !== 'undefined'
    && grid[col+1][row-1].status !== value
    && grid[col+1][row-1].status !== cellStatus.CELL_MINE
    && grid[col+1][row-1].status !== cellStatus.CELL_FLAG
    && grid[col+1][row-1].status !== cellStatus.CELL_MINE_FLAG) { 
    if (grid[col+1][row-1].warning > 0) {
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
    && grid[col-1][row].status !== cellStatus.CELL_MINE
    && grid[col-1][row].status !== cellStatus.CELL_FLAG
    && grid[col-1][row].status !== cellStatus.CELL_MINE_FLAG) {
    if (grid[col-1][row].warning > 0) {
      grid[col-1][row].visibility = true;
    } else {
      grid[col-1][row].status = value;
      findHowMuchExpand(grid, col-1, row, value);
    }
  }
  if (typeof grid[col+1] !== 'undefined'
    && typeof grid[col+1][row] !== 'undefined'
    && grid[col+1][row].status !== value
    && grid[col+1][row].status !== cellStatus.CELL_MINE
    && grid[col+1][row].status !== cellStatus.CELL_FLAG
    && grid[col+1][row].status !== cellStatus.CELL_MINE_FLAG) {
    if (grid[col+1][row].warning > 0) {
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
    && grid[col-1][row+1].status !== cellStatus.CELL_MINE
    && grid[col-1][row+1].status !== cellStatus.CELL_FLAG
    && grid[col-1][row+1].status !== cellStatus.CELL_MINE_FLAG) {
    if (grid[col-1][row+1].warning > 0) {
      grid[col-1][row+1].visibility = true;
    } else {
      grid[col-1][row+1].status = value;
      findHowMuchExpand(grid, col-1, row+1, value);
    }
  }
  if (typeof grid[col][row+1] !== 'undefined'
    && grid[col][row+1].status !== value
    && grid[col][row+1].status !== cellStatus.CELL_MINE
    && grid[col][row+1].status !== cellStatus.CELL_FLAG
    && grid[col][row+1].status !== cellStatus.CELL_MINE_FLAG) {
    if (grid[col][row+1].warning > 0) {
      grid[col][row+1].visibility = true;
    } else {
      grid[col][row+1].status = value;
      findHowMuchExpand(grid, col, row+1, value);
    }
  }
  if (typeof grid[col+1] !== 'undefined'
    && typeof grid[col+1][row+1] !== 'undefined'
    && grid[col+1][row+1].status !== value
    && grid[col+1][row+1].status !== cellStatus.CELL_MINE
    && grid[col+1][row+1].status !== cellStatus.CELL_FLAG
    && grid[col+1][row+1].status !== cellStatus.CELL_MINE_FLAG) {
    if (grid[col+1][row+1].warning > 0) {
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
  fillMineGrid,
  fillWarningNumbers,
  findHowMuchExpand,
  deepClone
}