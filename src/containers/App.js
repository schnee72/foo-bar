import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Configurator from './Configurator';
import NotFound from './NotFound';

const App = () =>
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/configurator" component={Configurator} />
      <Route component={NotFound} />
    </Switch>
  </div>;

export default App;
