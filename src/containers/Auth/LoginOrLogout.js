import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Logout = ({ startLogout, auth }) => {
  if (!_.isEmpty(auth)) {
    return (
      <div>
        <Button
          onClick={() => startLogout()}
          variant="contained"
          color="default"
        >
          Logout
        </Button>
      </div>
    );
  }
  return (
    <Button
      variant="contained"
      color="default"
      component={Link}
      to="/login"
    >
      Login
    </Button>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

Logout.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  startLogout,
})(Logout);
