import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  const action = login('abc321');
  expect(action).toEqual({
    type: 'LOGIN',
    payload: 'abc321',
  });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
