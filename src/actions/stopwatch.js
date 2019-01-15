import { actionTypes } from '../constants';

const newStopwatch = text => ({
  type: actionTypes.NEW_STOPWATCH,
  text,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const updateStopwatch = (text, hours, minutes, seconds) => ({
  type: actionTypes.UPDATE_STOPWATCH,
  text,
  hours,
  minutes,
  seconds,
});

export { updateStopwatch, newStopwatch };
