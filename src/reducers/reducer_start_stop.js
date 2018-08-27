import * as types from '../constants/ActionTypes';

export default function (state = false, action) {
  switch (action.type) {
    default:
      return state;
    case types.START:
      return true;
    case types.STOP:
      return false;
  }
}
