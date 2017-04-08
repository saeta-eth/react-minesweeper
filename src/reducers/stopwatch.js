import { actionTypes } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.NEW_STOPWATCH:
      return Object.assign({}, {
        text: action.text,
        hours: action.hours,
        minutes: action.minutes,
        seconds: action.seconds
      });
    case actionTypes.UPDATE_STOPWATCH:
      return Object.assign({}, {
        text: action.text,
        hours: action.hours,
        minutes: action.minutes,
        seconds: action.seconds
      });
    default:
      return state;
  }
};