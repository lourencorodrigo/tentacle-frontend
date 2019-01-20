import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRouter from '../../components/PrivateRouter';
import { path } from '../../Router';
import Login from './Login';
import Register from './Register';
import Logout from './Logout/Logout';

class Routes extends React.Component {
  privateRouters = [
    {
      mustBeLogged: false,
      path: path.AUTH_REGISTER,
      exact: false,
      component: Register
    },
    {
      mustBeLogged: false,
      path: path.AUTH_LOGIN,
      redirectTo: path.HOME,
      exact: false,
      component: Login
    }
  ];

  render() {
    return (
      <Switch>
        <Route path={path.AUTH_LOGOUT} component={Logout} />

        {this.privateRouters.map((router, index) => (
          <PrivateRouter key={index} {...router} />
        ))}

        <Redirect exact from={path.AUTH} to={path.AUTH_LOGIN} />
      </Switch>
    );
  }
}

export default Routes;
