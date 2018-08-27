import AuthReducer from '../../reducers/reducer_auth';
import * as types from '../../constants/ActionTypes';

test('should set uid for login', () => {
  const action = {
    type: types.LOGIN,
    payload: 'abc123',
  };
  const state = AuthReducer({}, action);
  expect(state.uid).toBe(action.payload);
});

test('should clear uid for logout', () => {
  const action = {
    type: types.LOGOUT,
  };
  const state = AuthReducer({ uid: 'test' }, action);
  expect(state).toEqual({});
});
