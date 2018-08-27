import {
  addOne,
  start,
  pause,
  unpause,
} from '../../actions/timer';

test('Add a second to our timer', () => {
  const action = addOne();
  expect(action).toEqual({
    type: 'ADD_ONE',
  });
});

test('Unpause Activity', () => {
  const action = unpause();
  expect(action).toEqual({
    type: 'UNPAUSE',
  });
});
