import * as types from '../constants/ActionTypes';

export default function (state = '', action) {
  switch (action.type) {
    default:
      return state;
    case types.ADD_ACTIVITY:
      return action.payload;
    case types.STOP:
      return '';
  }
}
