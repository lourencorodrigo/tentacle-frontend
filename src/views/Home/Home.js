import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Home</h1>
        <Link to="/u/logout">Sair</Link>
      </Wrapper>
    );
  }
}

export default Home;
