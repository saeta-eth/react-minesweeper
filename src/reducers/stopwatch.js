import { actionTypes } from '../constants';

const stopwatch = (state = [], action) => {
  const { text, hours, minutes, seconds } = action;

  switch (action.type) {
    case actionTypes.NEW_STOPWATCH: {
      return Object.assign(
        {},
        {
          text,
          hours,
          minutes,
          seconds,
        }
      );
    }

    case actionTypes.UPDATE_STOPWATCH: {
      return Object.assign(
        {},
        {
          text,
          hours,
          minutes,
          seconds,
        }
      );
    }

    default: {
      return state;
    }
  }
};

export default stopwatch;
