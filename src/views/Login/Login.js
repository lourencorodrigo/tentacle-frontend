import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import LoginForm from './LoginForm';
import { random } from '../../utils';
import Alert from '../../components/Alert';
import Link from '../../components/Link';
import { Wrapper, WrapperForm, WrapperLinks } from './styles';
import { isUserLogged } from '../../services/authService';

import game1 from '../../assets/images/background1.jpg';
import game2 from '../../assets/images/background2.jpg';
import game3 from '../../assets/images/background3.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      showAlert: true
    };
  }

  componentDidMount() {
    this.generateRandomImages();
    this.checkForToken();
  }

  componentDidUpdate() {
    if (isUserLogged()) this.redirectToHome();
  }

  generateRandomImages() {
    const images = [game1, game2, game3];
    const image = images[random(0, images.length - 1)];
    this.setState({ image: image });
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
        <Wrapper background={this.state.image}>
          <WrapperForm>
            {error && !loading && showAlert && (
              <Alert
                type="danger"
                onClick={this.showAlertError.bind(this, false)}
              >
                {<FormattedMessage id={errorData.message} />}
              </Alert>
            )}
            <LoginForm loading={loading} onSubmit={this.onSubmit.bind(this)} />
            <WrapperLinks>
              <Link to="/recovery-password">
                <FormattedMessage id="login.forgot_your_password" />
              </Link>
              <Link to="/register">
                <FormattedMessage id="login.register_account" />
              </Link>
            </WrapperLinks>
          </WrapperForm>
        </Wrapper>
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
