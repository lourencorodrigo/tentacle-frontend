import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import LoginForm from './LoginForm';
import { random } from '../../utils';
import Alert from '../../components/Alert';
import { Wrapper, WrapperForm } from './styles';
import game1 from '../../assets/images/background1.jpg';
import game2 from '../../assets/images/background2.jpg';
import game3 from '../../assets/images/background3.jpg';
import { TOKEN_NAME } from '../../utils/constants';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  componentDidMount() {
    this.generateRandomImages();
    this.checkForToken();
  }

  componentDidUpdate() {
    const {
      data: { accessToken }
    } = this.props.authState;

    if (accessToken) this.redirectToHome();
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
    if (sessionStorage.getItem(TOKEN_NAME)) {
      this.redirectToHome();
    }
  }

  onSubmit(values) {
    const { email, password } = values;
    this.props.auth(email, password);
  }

  render() {
    const { loading, error, errorData } = this.props.authState;
    return (
      <>
        <Helmet title="Login" />
        <Wrapper background={this.state.image}>
          <WrapperForm>
            {error && (
              <Alert type="danger">
                {<FormattedMessage id={errorData.message} />}
              </Alert>
            )}
            <LoginForm loading={loading} onSubmit={this.onSubmit.bind(this)} />
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
