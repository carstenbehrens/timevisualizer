import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

const styles = theme => ({
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 10,
    textAlign: 'center',
  },
  category: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 2,
    textAlign: 'center',
  },
  card: {
    width: '70%',
    marginTop: theme.spacing.unit * 3,
  },
});

function DisplayTime({ time, activity, classes }) {
  if (activity === '') {
    return null;
  }
  return (
    <Card className={classes.card}>
      <Typography className={classes.category}>
          Activity:
      </Typography>
      <Typography className={classes.title} color="secondary">
        {activity}
      </Typography>
      <Typography className={classes.category}>
          Time:
      </Typography>
      <Typography className={classes.title} color="primary">
        {moment.duration(time, 'seconds').format('hh:mm:ss', { trim: false })}
      </Typography>
    </Card>
  );
}

DisplayTime.propTypes = {
  activity: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  time: PropTypes.number.isRequired,
};

export default withStyles(styles)(DisplayTime);
