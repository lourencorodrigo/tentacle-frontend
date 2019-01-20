import React from 'react';

import Router from './Router';
import { Wrapper, WrapperCard } from './styles';
import { random } from '../../utils';

import game1 from '../../assets/images/background1.jpg';
import game2 from '../../assets/images/background2.jpg';
import game3 from '../../assets/images/background3.jpg';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  componentDidMount() {
    this.generateRandomImages();
  }

  generateRandomImages() {
    const images = [game1, game2, game3];
    const image = images[random(0, images.length - 1)];
    this.setState({ image: image });
  }

  render() {
    return (
      <>
        <Wrapper background={this.state.image}>
          <WrapperCard>
            <Router />
          </WrapperCard>
        </Wrapper>
      </>
    );
  }
}

export default Auth;
