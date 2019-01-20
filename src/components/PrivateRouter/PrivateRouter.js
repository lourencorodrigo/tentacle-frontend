/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { path } from '../../Router';
import { isUserLogged } from '../../services/authService';

const PrivateRouter = ({
  mustBeLogged = true,
  component: Component,
  redirectTo = path.AUTH_LOGIN,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      mustBeLogged === isUserLogged() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRouter;
