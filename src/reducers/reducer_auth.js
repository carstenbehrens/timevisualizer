import * as types from '../constants/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        uid: action.payload,
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};
