import React from 'react';
import PropTypes from 'prop-types';

import { path } from '../../../Router';
import { TOKEN_NAME } from '../../../utils/constants';

class Logout extends React.Component {
  componentDidMount() {
    this.removeToken();
  }

  redirectToLogin() {
    this.props.history.push(path.AUTH_LOGIN);
  }

  removeToken() {
    sessionStorage.removeItem(TOKEN_NAME);
    this.redirectToLogin();
  }

  render() {
    return <h1>Logout</h1>;
  }
}

Logout.propTypes = {
  history: PropTypes.object.isRequired
};

export default Logout;
