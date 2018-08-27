import { setStartDate, setEndDate } from '../../actions/filters';

test('should generate Set StartDate action object', () => {
  const action = setStartDate('25.11.1991');
  expect(action).toEqual({
    type: 'SET_START_DATE',
    payload: '25.11.1991',
  });
});

test('should generate Set EndDate action object', () => {
  const action = setEndDate('25.11.1991');
  expect(action).toEqual({
    type: 'SET_END_DATE',
    payload: '25.11.1991',
  });
});
