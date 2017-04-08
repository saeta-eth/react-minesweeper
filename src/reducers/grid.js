import { actionTypes } from '../constants';
import { deepClone, findHowMuchExpand } from '../utils/grid';

export default (state = [], action) => {
  let previousState = deepClone(state);
  switch (action.type) {
    case actionTypes.LEFT_CLICK_CELL:
      previousState[action.col][action.row].status = action.value;
      previousState = findHowMuchExpand(previousState, action.col, action.row, action.value);
      return previousState;
    case actionTypes.RIGHT_CLICK_CELL:
      previousState[action.col][action.row].status = action.value;
      return previousState;
    default:
      return state;
  }
};