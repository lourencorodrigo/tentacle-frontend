import React from 'react';
import Helmet from 'react-helmet';

import LoginForm from './LoginForm';
import { random } from '../../utils';
import { Wrapper } from './styles';
import game1 from '../../assets/images/background1.jpg';
import game2 from '../../assets/images/background2.jpg';
import game3 from '../../assets/images/background3.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      image: ''
    };
  }

  componentDidMount() {
    /* eslint-disable */
    this.props.auth('rodrigo@gmail.com', '12345');
    const images = [game1, game2, game3];
    const image = images[random(0, images.length - 1)];
    this.setState({ image: image });
  }

  render() {
    return (
      <>
        <Helmet title="Login" />
        <Wrapper background={this.state.image}>
          <LoginForm />
        </Wrapper>
      </>
    );
  }
}

export default Login;
