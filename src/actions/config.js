import * as types from '../constants';

export const addPerson = (config) => {
  return {
    type: types.CHANGE_CONFIG,
    config
  };
}