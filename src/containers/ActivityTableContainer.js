import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import _ from 'lodash';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import DateRangeSelector from './DateRangeSelector';
import ActivityList from '../components/ActivityList';
import { startSetActivities } from '../actions/activity';

const moment = extendMoment(Moment);


class ActivityTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredArray: [],
    };
  }

  componentDidMount() {
    if (this.props.isFetching) {
      this.props.startSetActivities();
    } else {
      this.setActivityObject();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      isFetching,
    } = nextProps;
    if (isFetching) {
      return null;
    }
    this.setActivityObject();
  }

  setActivityObject() {
    const {
      startDate,
      endDate,
    } = this.props.filters;
    const filteredbyDateArray = this.props.activityList.filter(obj => moment(obj.date, 'DD.MM.YYYY')
      .isBetween(startDate, endDate, 'days', '[]'));

    const sumArray = _(filteredbyDateArray)
      .groupBy('name')
      .map((objs, key) => ({
        time: _.sumBy(objs, 'time'),
        name: key,
      }))
      .value();

    this.setState({
      filteredArray: sumArray,
    });
  }

  refresh() {
    this.props.startSetActivities();
    this.setActivityObject();
  }

  render() {
    return (
      <div>
        <DateRangeSelector />
        <Button variant="fab" color="secondary" aria-label="Refresh" mini onClick={() => this.refresh()}>
          <Icon>refresh</Icon>
        </Button>
        <ActivityList
          filteredList={this.state.filteredArray}
          isFetching={this.props.isFetching}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activityList: state.activityList,
    isFetching: state.isFetching,
    filters: state.filters,
  };
}

ActivityTableContainer.propTypes = {
  activityList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  filters: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  startSetActivities,
})(ActivityTableContainer);
