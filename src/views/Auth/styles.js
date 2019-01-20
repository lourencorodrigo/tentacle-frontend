import styled, { css } from 'styled-components';

import { em, media } from '../../styles/tools';
import { white } from '../../styles/settings';

import tentacle from '../../assets/images/tentacle/logo-tentacle-02.png';

export const Wrapper = styled.div`
  opacity: ${props => (props.background ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.background});
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  transition: opacity 0.5s linear;
`;

export const WrapperCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${em(30)} ${em(20)};
  border-radius: ${em(0)};
  width: 92%;
  height: 92%;
  border-radius: ${em(10)};
  transition: width 0.15s linear;
  background: rgba(255, 255, 255, 0.16);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  background-image: url(${tentacle});
  background-repeat: no-repeat;
  background-size: ${em(350)};
  background-position: bottom ${em(-150)} right ${em(-120)};

  ${media.sm(css`
    padding: ${em(40)} ${em(50)};
    width: ${em(550)};
    height: auto;
  `)};
`;

export const Title = styled.h1`
  font-family: Avenir-Black;
  font-weight: 900;
  text-align: center;
  text-shadow: ${em(1)} ${em(1)} 0 rgba(0, 0, 0, 0.3);
  color: ${white};
  font-size: ${em(30)};
`;

export const Description = styled.h1`
  font-family: Avenir;
  text-shadow: ${em(1)} ${em(1)} 0 rgba(0, 0, 0, 0.3);
  font-weight: 500;
  letter-spacing: ${em(2.5)};
  text-align: center;
  color: ${white};
  font-size: ${em(16)};
`;

export const Form = styled.form`
  width: 100%;
  padding-top: ${em(26)};
`;

export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${em(16)};
  width: 100%;
  font-family: Avenir-Black;
`;
