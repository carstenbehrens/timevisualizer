import * as types from '../constants/ActionTypes';

export default function (state = '', action) {
  switch (action.type) {
    default:
      return state;
    case types.STOP:
      if (action.payload !== '') {
        return action.payload;
      }
      return state;
  }
}
