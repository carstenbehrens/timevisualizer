import * as types from '../constants/ActionTypes';

export const setStartDate = startDate => ({
  type: types.SET_START_DATE,
  payload: startDate,
});

export const setEndDate = endDate => ({
  type: types.SET_END_DATE,
  payload: endDate,
});
