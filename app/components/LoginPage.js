import React from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers/userReducer.js';
import LoginComponent from './LoginComponent';
// import OauthLoginForm from './oauth-login-form'

const LoginPage = props => {
  const { handleSubmit } = props;

  return (
    <div className='loginComponent'>
      <h1 className='superhero-header'>SUPER HERO DATABASE</h1>
      <div>
        <br />
        <img src='/images/supergroup.png' className='loginMainPhoto' />
        <div>
          <LoginComponent handleSubmit={handleSubmit} />
          {/*<OauthLoginForm />*/}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login({ email, password })).then(() => {
        ownProps.history.push('/hero');
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
