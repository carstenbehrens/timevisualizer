import * as types from '../constants/ActionTypes';

export default function (state = false, action) {
  switch (action.type) {
    default:
      return state;
    case types.PAUSE:
      return true;
    case types.UNPAUSE:
      return false;
  }
}
