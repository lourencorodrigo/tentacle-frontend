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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  componentDidMount() {
    const images = [game1, game2, game3];
    const image = images[random(0, images.length - 1)];
    this.setState({ image: image });
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
  authState: PropTypes.object
};

export default Login;
