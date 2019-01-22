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
  background: #9de1fe;
  position: absolute;
  left: 0;
  right: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  padding: 6px;
  animation: ${slideInDown} 1s linear;
`;

export const Title = styled.h1`
  margin: 0;
  color: #0d5979;
  font-family: Avenir;
  font-size: ${em(16)};
`;
