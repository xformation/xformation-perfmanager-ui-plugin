import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Rules } from './Rules';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/rules`} component={Rules} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('performance-main-container')
    );
  }, 100);
}