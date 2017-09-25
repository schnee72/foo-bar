import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import NotFound from './NotFound';

const App = () =>
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </div>;

export default App;
