import React from 'react';

const Login = props =>
  <div>
    <p>
      <input placeholder="name" />
    </p>
    <p>
      <input type="password" placeholder="password" />
    </p>
    <p>
      <button onClick={() => props.history.push('./configurator')}>Login</button>
    </p>
  </div>;

export default Login;
