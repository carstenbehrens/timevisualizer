import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { setStartDate, setEndDate } from '../actions/filters';

const styles = theme => ({
  root: {
    width: '100%',
    marginRight: theme.spacing.unit * 3,
    overflow: 'visible',
  },
});

class DateRangeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null,
    };
  }

  onDatesChange = ({
    startDate,
    endDate,
  }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocused) => {
    this.setState({
      calendarFocused,
    });
  }

  render() {
    const { filters, classes } = this.props;
    const { calendarFocused } = this.state;
    return (
      <span className={classes.root}>
        <DateRangePicker
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          showClearDates
          isOutsideRange={() => false}
          startDateId="start"
          endDateId="end"
          displayFormat="DD.MM.YY"
          minimumNights={0}
        />
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters,
  };
}

DateRangeSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, {
    name: 'DateRangeSelector',
  }),
  connect(mapStateToProps, {
    setStartDate,
    setEndDate,
  }),
)(DateRangeSelector);
