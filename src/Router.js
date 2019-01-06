import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import PrivateRouter from './components/PrivateRouter';
import Auth from './views/Auth';
import Home from './views/Home';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRouter exact path={path.HOME} component={Home} />

          <Route path={path.AUTH} component={Auth} />

          <Redirect from={path.LOGIN} to={path.AUTH_LOGIN} />
          <Redirect from={path.LOGOUT} to={path.AUTH_LOGOUT} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

export const path = new function() {
  this.AUTH = '/u';
  this.HOME = '/';
  this.LOGIN = '/login';
  this.LOGOUT = '/logout';
  this.REGISTER = '/register';

  this.AUTH_LOGIN = `${this.AUTH}${this.LOGIN}`;
  this.AUTH_REGISTER = `${this.AUTH}${this.REGISTER}`;
  this.AUTH_LOGOUT = `${this.AUTH}${this.LOGOUT}`;
}();
