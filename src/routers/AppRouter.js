import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import Menu from '../components/Menu/Menu';
import TimerContainer from '../containers/Timer/TimerContainer';
import ActivityTableContainer from '../containers/ActivityTableContainer';
import PieContainer from '../containers/PieContainer';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Auth/Login';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Menu>
        <Switch>
          <Route path="/" component={TimerContainer} exact />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/timerecorder" component={TimerContainer} />
          <PrivateRoute path="/activitytable" component={ActivityTableContainer} />
          <PrivateRoute path="/piechart" component={PieContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </Menu>
    </div>
  </Router>
);

export default AppRouter;
