import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';

import LoginForm from './LoginForm';
import Link from '../../../components/Link';
import { WrapperLinks } from '../styles';
import { isUserLogged } from '../../../services/authService';
import { path } from '../../../Router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  componentDidUpdate() {
    const { loading, error, errorData } = this.props.authState;
    !loading && error && errorData && this.showAlertError(errorData.message);
    isUserLogged() && this.redirectToHome();
  }

  redirectToHome() {
    this.props.history.push(path.HOME);
  }

  onSubmit(values) {
    const { email, password } = values;
    this.props.auth(email, password);
  }

  showAlertError(message) {
    toast.error(<FormattedMessage id={message} />);
  }

  render() {
    const { loading } = this.props.authState;
    return (
      <>
        <Helmet title="Login" />
        <LoginForm loading={loading} onSubmit={this.onSubmit.bind(this)} />
        <WrapperLinks>
          <Link to="/recovery-password">
            <FormattedMessage id="login.forgot_your_password" />
          </Link>
          <Link to={path.AUTH_REGISTER}>
            <FormattedMessage id="login.register_account" />
          </Link>
        </WrapperLinks>
      </>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.func,
  authState: PropTypes.object,
  history: PropTypes.object.isRequired
};

export default Login;
