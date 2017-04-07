import { actionTypes } from '../constants';
import { deepClone } from '../utils/grid';


export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CHANGE_GRID:
      let previousState = deepClone(state);
      previousState[action.col][action.row] = action.value;
      return previousState;
    default:
      return state;
  }
};