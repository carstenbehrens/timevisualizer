import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

const NotFoundPage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="display3" gutterBottom align="center">
          404
      </Typography>
      <Typography variant="headline" gutterBottom align="center">
          The page you are looking for cannot be found.
      </Typography>
    </div>
  );
};

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFoundPage);
