import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import LoginForm from './LoginForm';
import Alert from '../../../components/Alert';
import Link from '../../../components/Link';
import { WrapperLinks } from '../styles';
import { isUserLogged } from '../../../services/authService';
import { path } from '../../../Router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      showAlert: true
    };
  }

  componentDidMount() {
    this.checkForToken();
  }

  componentDidUpdate() {
    if (isUserLogged()) this.redirectToHome();
  }

  redirectToHome() {
    this.props.history.push('/');
  }

  checkForToken() {
    if (isUserLogged()) {
      this.redirectToHome();
    }
  }

  showAlertError(show) {
    this.setState({ showAlert: show });
  }

  onSubmit(values) {
    this.showAlertError(true);
    const { email, password } = values;
    this.props.auth(email, password);
  }

  render() {
    const { loading, error, errorData } = this.props.authState;
    const { showAlert } = this.state;
    return (
      <>
        <Helmet title="Login" />
        {error && !loading && showAlert && (
          <Alert type="danger" onClick={this.showAlertError.bind(this, false)}>
            {<FormattedMessage id={errorData.message} />}
          </Alert>
        )}
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
