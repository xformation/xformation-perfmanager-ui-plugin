import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ManageDashboard } from './ManageDashboard';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/managedashboard`} component={ManageDashboard} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('performance-main-container')
    );
  }, 100);
}