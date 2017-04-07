import * as types from '../constants';

export const changeConfig = (config) => {
  return {
    type: types.CHANGE_CONFIG,
    config
  };
}