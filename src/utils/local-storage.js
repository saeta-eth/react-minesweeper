const loadState = initalState => {
  try {
    // eslint-disable-next-line
    const serializedState = localStorage.getItem('minesweeper');
    if (serializedState === null) {
      return initalState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    // eslint-disable-next-line
    localStorage.setItem('minesweeper', serializedState);
  } catch {
    // ignore write errors
  }
};

export { loadState, saveState };
