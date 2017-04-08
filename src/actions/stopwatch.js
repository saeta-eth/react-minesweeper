import { actionTypes } from '../constants';

export const newStopwatch = (text) => {
  return {
    type: actionTypes.NEW_STOPWATCH,
    text: text,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
}

export const updateStopwatch = (text, hours, minutes, seconds) => {
  return {
    type: actionTypes.UPDATE_STOPWATCH,
    text: text,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}
