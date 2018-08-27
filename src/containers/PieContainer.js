import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { extendMoment } from 'moment-range';
import DateRangeSelector from './DateRangeSelector';
import { startSetActivities } from '../actions/activity';
import Pie from '../components/Pie';

const moment = extendMoment(Moment);

class PieContainer extends Component {
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
    const { isFetching } = nextProps;
    if (isFetching) {
      return null;
    }
    this.setActivityObject();
  }

  setActivityObject() {
    const { startDate, endDate } = this.props.filters;

    const filteredbyDateArray = this.props.activityList.filter(obj => moment(obj.date, 'DD.MM.YYYY').isBetween(startDate, endDate, 'days', '[]'));

    const sumArray = _(filteredbyDateArray)
      .groupBy('name')
      .map((objs, key) => ({
        id: key,
        label: key,
        value: _.sumBy(objs, 'time'),
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

  renderBarChart() {
    if (this.state.filteredArray.length > 0) {
      return (
        <Pie data={this.state.filteredArray} />
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <DateRangeSelector />
        <Button variant="fab" color="secondary" aria-label="Refresh" mini onClick={() => this.refresh()}>
          <Icon>refresh</Icon>
        </Button>
        {this.renderBarChart()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activityList: state.activityList,
    filters: state.filters,
    isFetching: state.isFetching,
  };
}

PieContainer.propTypes = {
  activityList: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, {
  startSetActivities,
})(PieContainer);
