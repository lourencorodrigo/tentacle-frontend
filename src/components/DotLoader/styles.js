import styled, { keyframes, css } from 'styled-components';

import { em } from '../../styles/tools';

const bouncedelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

const animation = css`
  animation: ${bouncedelay} 1.4s infinite ease-in-out both;
`;

export const Spinner = styled.div`
  text-align: center;

  & > div {
    width: ${em(10)};
    height: ${em(10)};
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    display: inline-block;
  }
`;

export const Bounce1 = styled.div`
  ${animation} animation-delay: -0.32s;
`;

export const Bounce2 = styled.div`
  ${animation} animation-delay: -0.16s;
`;

export const Bounce3 = styled.div`
  ${animation};
`;
