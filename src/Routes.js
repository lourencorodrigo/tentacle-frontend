import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRouter from './components/PrivateRouter';
import Login from './views/Login';
import Logout from './views/Logout';
import Home from './views/Home';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRouter exact component={Home} path={ROUTER_PATH.HOME} />
          <Route exact path={ROUTER_PATH.LOGIN} component={Login} />
          <Route exact path={ROUTER_PATH.LOGOUT} component={Logout} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

export const ROUTER_PATH = {
  HOME: '/',
  LOGIN: '/login',
  LOGOUT: '/logout'
};
