import * as types from '../constants/ActionTypes';

export default function (state = true, action) {
  switch (action.type) {
    default:
      return state;
    case types.STOPPED_FETCHING:
      return action.payload;
    case types.IS_FETCHING:
      return action.payload;
  }
}
