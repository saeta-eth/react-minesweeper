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

const fillMultiArray = function fillMultiArray(x,y, value) {
  return deepClone(new Array(x).fill(new Array(y).fill(value)));
}

const fillMultiArray = function fillMultiArray(x,y, value) {
  return deepClone(new Array(x).fill(new Array(y).fill(value)));
}
const fillBombGrid = function fillBombGrid(positionBombs, ROW_NUMBER, COLS_NUMBER) {
  const arrayBomb = fillMultiArray(ROW_NUMBER, COLS_NUMBER, 0);
  for (let bomb = 0; bomb < (positionBombs.length / 2); bomb += 2) {
    const position = positionBombs.slice(bomb, bomb + 2)
    arrayBomb[position[0]][position[1]] = 1;
  }

  return arrayBomb;
}

const fillWarningNumbers = function fillWarningNumbers(grid, positionBombs) {
  for (let bomb = 0; bomb < (positionBombs.length / 2); bomb += 2) {
    const position = positionBombs.slice(bomb, bomb + 2);
    // TOP
    if (typeof grid[position[0]-1] !== 'undefined' && typeof grid[position[0]-1][position[1]-1] !== 'undefined') {
      grid[position[0]-1][position[1]-1].status = typeof grid[position[0]-1][position[1]-1].status === 'number' ? grid[position[0]-1][position[1]-1].status+1  : 1;
    }
    if (typeof grid[position[0]][position[1]-1] !== 'undefined') {
      grid[position[0]][position[1]-1].status = typeof grid[position[0]][position[1]-1].status === 'number' ? grid[position[0]][position[1]-1].status+1 : 1;
    }
    if (typeof grid[position[0]+1] !== 'undefined' && typeof grid[position[0]+1][position[1]-1] !== 'undefined') { 
      grid[position[0]+1][position[1]-1].status = typeof grid[position[0]+1][position[1]-1].status === 'number' ? grid[position[0]+1][position[1]-1].status+1 : 1;
    }
    // MIDDLE
    if (typeof grid[position[0]-1] !== 'undefined' && typeof grid[position[0]-1][position[1]] !== 'undefined') {
      grid[position[0]-1][position[1]].status = typeof grid[position[0]-1][position[1]].status === 'number' ? grid[position[0]-1][position[1]].status+1 : 1;
    }
    if (typeof grid[position[0]+1] !== 'undefined' && typeof grid[position[0]+1][position[1]] !== 'undefined') {
      grid[position[0]+1][position[1]].status = typeof grid[position[0]+1][position[1]].status === 'number' ? grid[position[0]+1][position[1]].status+1 : 1;
    }
    // BOTTOM
    if (typeof grid[position[0]-1] !== 'undefined' && typeof grid[position[0]-1][position[1]+1] !== 'undefined') {
      grid[position[0]-1][position[1]+1].status = typeof grid[position[0]-1][position[1]+1].status === 'number' ? grid[position[0]-1][position[1]+1].status+1 : 1;
    }
    if (typeof grid[position[0]][position[1]+1] !== 'undefined') {
      grid[position[0]][position[1]+1].status = typeof grid[position[0]][position[1]+1].status === 'number' ? grid[position[0]][position[1]+1].status+1 : 1;
    }
    if (typeof grid[position[0]+1] !== 'undefined' && typeof grid[position[0]+1][position[1]+1] !== 'undefined') {
      grid[position[0]+1][position[1]+1].status = typeof grid[position[0]+1][position[1]+1].status === 'number' ? grid[position[0]+1][position[1]+1].status+1 : 1;
    }
  }
  return grid;
}

export {
  fillRandomBoolean,
  fillBombGrid,
  fillMultiArray,
  fillWarningNumbers,
  deepClone
}