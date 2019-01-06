/* eslint-disable */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { path } from '../../Router';
import Login from './Login';
import Register from './Register';
import Logout from './Logout/Logout';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Redirect exact from={path.AUTH} to={path.AUTH_LOGIN} />
          <Route path={path.AUTH_LOGIN} component={Login} />
          <Route path="/u/register" component={Register} />
          <Route path="/u/logout" component={Logout} />
        </Switch>
      </>
    );
  }
}

export default Routes;
