import styled, { css } from 'styled-components';

import { rem, media } from '../../styles/tools';
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
  padding: ${rem(30)} ${rem(20)};
  border-radius: ${rem(0)};
  width: 92%;
  height: 92%;
  border-radius: ${rem(10)};
  transition: width 0.15s linear;
  background: rgba(255, 255, 255, 0.16);

  background-image: url(${tentacle});
  background-repeat: no-repeat;
  background-size: ${rem(350)};
  background-position: bottom ${rem(-150)} right ${rem(-120)};

  ${media.sm(css`
    padding: ${rem(40)} ${rem(50)};
    width: ${rem(550)};
    height: auto;
  `)};
`;

export const Title = styled.h1`
  font-family: Avenir-Black;
  font-weight: 900;
  text-align: center;
  text-shadow: ${rem(1)} ${rem(1)} 0 rgba(0, 0, 0, 0.3);
  color: ${white};
  font-size: ${rem(30)};
`;

export const Description = styled.h1`
  font-family: Avenir;
  text-shadow: ${rem(1)} ${rem(1)} 0 rgba(0, 0, 0, 0.3);
  font-weight: 500;
  letter-spacing: ${rem(40)};
  text-align: center;
  color: ${white};
  font-size: ${rem(16)};
`;

export const Form = styled.form`
  width: 100%;
  padding-top: ${rem(26)};
`;

export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${rem(16)};
  width: 100%;
  font-family: Avenir-Black;
`;
