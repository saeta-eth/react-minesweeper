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

const fillBombGrid = function fillBombGrid(CANT_POSITIONS, ROW_NUMBER, COLS_NUMBER) {
  const positionBombs = fillRandomBoolean(CANT_POSITIONS, ROW_NUMBER);
  const arrayBomb = fillMultiArray(ROW_NUMBER, COLS_NUMBER, 0);
  
  for (let bomb = 0; bomb < CANT_POSITIONS; bomb += 2) {
    const position = positionBombs.slice(bomb, bomb + 2)
    arrayBomb[position[0]][position[1]] = 1;
  }

  return arrayBomb;
}

export {
  fillBombGrid,
  fillMultiArray,
  deepClone
}