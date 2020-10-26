import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Appointment from '../pages/Appointment';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route
      path="/appointment/:professional+/:specialty+"
      component={Appointment}
    />
  </Switch>
);

export default Routes;
