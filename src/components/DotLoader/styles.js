import styled, { keyframes, css } from 'styled-components';

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
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 100%;
    display: inline-block;
  }
`;

export const Bounce1 = styled.div`
  ${animation}
  animation-delay: -0.32s;
`;

export const Bounce2 = styled.div`
  ${animation}
  animation-delay: -0.16s;
`;

export const Bounce3 = styled.div`
  ${animation}
`;
