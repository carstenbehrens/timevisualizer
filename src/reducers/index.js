import { combineReducers } from 'redux';
import TimeReducer from './reducer_time';
import StartStopReducer from './reducer_start_stop';
import ActivityReducer from './reducer_activity';
import PauseReducer from './reducer_pause';
import LastActivityReducer from './reducer_lastActivity';
import SetActivityReducer from './reducer_set_activities';
import SetIsFetchingReducer from './reducer_isFetching';
import FiltersReducer from './reducer_filter';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  time: TimeReducer,
  status: StartStopReducer,
  activity: ActivityReducer,
  paused: PauseReducer,
  lastActivity: LastActivityReducer,
  activityList: SetActivityReducer,
  isFetching: SetIsFetchingReducer,
  filters: FiltersReducer,
  auth: AuthReducer,
});

export default rootReducer;
