import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addActivity,
  addActivityToDB,
  stop,
  stoppedFetching,
  setActivities,
  startSetActivities,
  isFetching,
} from '../../actions/activity';
import activities from '../fixtures/activities';

const createMockStore = configureMockStore([thunk]);
const uid = 'test123';
const defaultAuthState = { auth: { uid } };


test('Stop Activity', () => {
  const action = stop('Running');
  expect(action).toEqual({
    type: 'STOP',
    payload: 'Running',
  });
});


test('Add Activity', () => {
  const action = addActivity('Running');
  expect(action).toEqual({
    type: 'ADD_ACTIVITY',
    payload: 'Running',
  });
});

test('Should setup set activity list object with data', () => {
  const action = setActivities(activities);
  expect(action).toEqual({
    type: 'SET_ACTIVITY_LIST',
    payload: activities,
  });
});
