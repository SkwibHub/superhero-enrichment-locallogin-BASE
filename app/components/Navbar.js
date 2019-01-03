import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../reducers/userReducer.js';

const Navbar = props => {
  const { handleClick } = props;

  return (
    <div>
      <Link to='/hero' className='navButtonLeft'>
        HEROES
      </Link>
      <Link to='/team' className='navButtonLeft'>
        TEAMS
      </Link>
      <span>
        <h1 className='superhero-header'>SUPER HEROES</h1>
      </span>
      <Link to='/universe' className='navButtonRight'>
        UNIVERSES
      </Link>
      <Link to='/team' className='navButtonRight' onClick={handleClick}>
        LOGOUT
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick() {
      dispatch(logout()).then(() => {
        ownProps.history.push('/');
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
