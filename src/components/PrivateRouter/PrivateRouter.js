/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { path } from '../../Router';
import { isUserLogged } from '../../services/authService';

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUserLogged() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: path.AUTH_LOGIN,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRouter;
