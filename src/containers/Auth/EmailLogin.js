import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { startLoginEmail } from '../../actions/auth';
import { firebase } from '../../firebase/firebase';

export const LoginPage = ({ startLoginEmail, email, password }) => (
  <div>
    <Button
      onClick={() => startLoginEmail(email, password)}
      fullWidth
      variant="raised"
      color="primary"
    >
      Sign in
    </Button>
  </div>
);

LoginPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default connect(undefined, {
  startLoginEmail,
})(LoginPage);
