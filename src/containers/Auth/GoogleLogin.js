import React from 'react';
import { connect } from 'react-redux';
import GoogleButton from 'react-google-button';
import { startLogin } from '../../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <GoogleButton
      onClick={() => startLogin()}
    />
  </div>
);

export default connect(undefined, {
  startLogin,
})(LoginPage);
