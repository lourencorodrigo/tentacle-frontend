/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { ROUTER_PATH } from '../../Routes';
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
            pathname: ROUTER_PATH.LOGIN,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

// PrivateRouter.propTypes = {
//   component: PropTypes.element.isRequired,
//   location: PropTypes.shape({
//     hash: PropTypes.string.isRequired,
//     pathname: PropTypes.string.isRequired
//   })
// };

export default PrivateRouter;
