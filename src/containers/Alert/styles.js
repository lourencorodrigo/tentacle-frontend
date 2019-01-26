import styled, { keyframes } from 'styled-components';

import { em } from '../../styles/tools';

const slideInDown = keyframes`
  0%,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
  background: #d1ecf1;
  position: absolute;
  left: 0;
  right: 0;
  border-bottom: solid 1px #bee5eb;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 4px;
  display: flex;
  justify-content: center;
  padding: ${em(10)};
  animation: ${slideInDown} 1s linear;
`;

export const Title = styled.h1`
  margin: 0;
  color: #0c5460;
  font-family: Avenir;
  font-size: ${em(16)};
`;

export const Container = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: inherit;
  font-size: ${em(20)};
  font-weight: 400;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
`;

export const Close = styled.span`
  //
`;
