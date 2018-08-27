import * as types from '../constants/ActionTypes';

let timer = null;

export function addOne() {
  return {
    type: types.ADD_ONE,
  };
}

export const start = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(addOne()), 1000);
  dispatch({ type: types.START });
  dispatch(addOne());
};

export function pause() {
  return (dispatch) => {
    clearInterval(timer);
    dispatch({ type: types.PAUSE });
  };
}

export function unpause() {
  return {
    type: types.UNPAUSE,
  };
}
