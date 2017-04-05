import * as types from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case types.CHANGE_CONFIG:
      return [...state, Object.assign({}, action.config)];
    default:
      return state;
  }
};