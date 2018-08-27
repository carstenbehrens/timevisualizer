import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const SubmitButton = ({ activityName, activity }) => {
  if (activityName !== '') {
    return (
      <span className="input-group-btn">
        <Button
          variant="fab"
          color="secondary"
          type="submit"
          className="btn btn-secondary"
        >
          <Icon>add</Icon>
        </Button>
      </span>
    );
  } if (activity !== '') {
    return null;
  }
  return (
    <span className="input-group-btn">
      <Button
        variant="fab"
        color="secondary"
        disabled
        className="btn btn-secondary"
      >
        <Icon>add</Icon>
      </Button>
    </span>
  );
};

SubmitButton.propTypes = {
  activityName: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
};

export default SubmitButton;
