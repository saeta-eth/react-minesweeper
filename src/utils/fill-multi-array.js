// http://stackoverflow.com/q/43287528/1741027
const fillMultiArray = (ROW_NUMBER, COLS_NUMBER, defaultValue) =>
  Array.from(Array(ROW_NUMBER), row =>
    Array.from(Array(COLS_NUMBER), cell =>
      Object(defaultValue) === defaultValue
        ? Object.assign({}, defaultValue)
        : defaultValue
    )
  );

export default fillMultiArray;
