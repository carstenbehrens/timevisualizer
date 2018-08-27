import * as types from '../constants/ActionTypes';

export default function (state = 0, action) {
  switch (action.type) {
    default:
      return state;
    case types.ADD_ONE:
      return state + 1;
    case types.STOP:
      return 0;
  }
}
