import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import Icon from '@material-ui/core/Icon';
import DisplayTime from '../../components/DisplayTime';
import {
  addActivityToDB,
  addActivity,
  startSetActivities,
  stop,
} from '../../actions/activity';
import {
  start,
  pause,
  unpause,
} from '../../actions/timer';
import SubmitButton from '../../components/Timer/SubmitButton';

const styles = theme => ({
  root: {
    height: 50,
    width: 400,
    fontSize: 22,
    overflow: 'visible',
  },
  center: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityName: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.isFetching) {
      this.props.startSetActivities();
    }
  }

  onInputChange(event) {
    const activityName = event.target.value;
    if (!this.props.status) {
      if ((activityName.match(/^[A-Za-z]+$/) || (activityName === ''))) {
        this.setState({
          activityName,
        });
      }
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addActivity(this.state.activityName);
    this.setState({
      activityName: '',
    });
  }

  startTimer() {
    this.props.start();
  }

  stopTimer() {
    const dateMoment = moment().format('DD.MM.YYYY');
    this.props.pause();
    this.props.stop(this.props.activity);
    this.props.addActivityToDB(this.props.activity, this.props.time, dateMoment);
    this.props.unpause();
  }

  pauseTimer() {
    if (this.props.status) {
      this.props.pause();
    }
  }

  unpauseTimer() {
    this.props.unpause();
    this.startTimer();
  }

  renderButton() {
    if (this.props.paused) {
      return (
        <Button
          type="button"
          color="secondary"
          variant="fab"
          className="btn btn-secondary"
          onClick={() => this.unpauseTimer()}
        >
          <Icon>play_arrow</Icon>
        </Button>
      );
    }
    if (this.props.status) {
      return (
        <React.Fragment>
          <Button
            type="button"
            color="primary"
            variant="fab"
            className="btn btn-primary"
            onClick={() => this.pauseTimer()}
          >
            <Icon>pause</Icon>
          </Button>
          <Button
            type="button"
            color="secondary"
            variant="fab"
            className="btn btn-secondary"
            onClick={() => this.stopTimer()}
          >
            <Icon>stop</Icon>
          </Button>
        </React.Fragment>
      );
    }
    if (this.props.activity !== '') {
      return (
        <Button
          type="button"
          color="primary"
          variant="fab"
          className="btn btn-secondary"
          onClick={() => this.startTimer()}
        >
          <Icon>play_arrow</Icon>
        </Button>
      );
    }
  }


  render() {
    const { classes, activity, time } = this.props;
    const { activityName } = this.state;
    return (
      <div>
        <div className={classes.center}>
          <form onSubmit={this.onSubmit}>
            <Input
              placeholder="Enter Activity"
              className={classes.root}
              value={activityName}
              onChange={this.onInputChange}
            />
            {this.renderButton()}
            <SubmitButton activityName={activityName} activity={activity} />
          </form>
        </div>
        <div className={classes.center}>
          <DisplayTime time={time} activity={activity} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity,
    activityList: state.activityList,
    isFetching: state.isFetching,
    status: state.status,
    paused: state.paused,
    time: state.time,
  };
}

Timer.propTypes = {
  activity: PropTypes.string.isRequired,
  activityList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  status: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
};

export default compose(
  withStyles(styles, { name: 'Timer' }),
  connect(mapStateToProps,
    {
      start,
      stop,
      pause,
      unpause,
      addActivityToDB,
      addActivity,
      startSetActivities,
    }),
)(Timer);
