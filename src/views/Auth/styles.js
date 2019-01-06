import styled, { css } from 'styled-components';

import { rem, media } from '../../styles/tools';
import { white } from '../../styles/settings';

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
  background: rgba(255, 255, 255, 0.16);
  border-radius: ${rem(0)};
  width: 92%;
  height: 92%;
  border-radius: ${rem(10)};
  transition: width 0.15s linear;

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
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
  color: ${white};
  font-size: ${rem(30)};
`;
