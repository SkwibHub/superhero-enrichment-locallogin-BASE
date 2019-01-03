import React from 'react';

const LoginComponent = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <br />
        <div>
          <label htmlFor='email'>Email </label>
          <input type='email' name='email' required aria-required='true' />
        </div>
        <br />
        <div>
          <label htmlFor='password'>Password </label>
          <input
            type='password'
            name='password'
            required
            aria-required='true'
          />
        </div>
        <div>
          <br />
          <button type='submit' className='loginButton'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
