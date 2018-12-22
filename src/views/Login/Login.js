import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import { random } from '../../utils';
import { Wrapper } from './styles';
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
    const { loading } = this.props.authState;
    return (
      <>
        <Helmet title="Login" />
        <Wrapper background={this.state.image}>
          <LoginForm loading={loading} onSubmit={this.onSubmit.bind(this)} />
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
