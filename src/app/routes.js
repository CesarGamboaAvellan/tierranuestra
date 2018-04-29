import React from 'react';
import { Route } from 'react-router';
import StatusReport from './modules/TierraNuestra/TierraNuestra';

export default(
  <Route>
    <Route
      path="/"
      component={StatusReport}
    />
  </Route>
);
