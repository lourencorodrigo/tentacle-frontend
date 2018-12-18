import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 90px;
  height: 90px;
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotate(45deg);
`;

const move = keyframes`
  0%, 100% {
    transform: none;
  }
  12.5% {
    transform: translate(30px, 0);
  }
  25% {
    transform: translate(60px, 0);
  }
  37.5% {
    transform: translate(60px, 30px);
  }
  50% {
    transform: translate(60px, 60px);
  }
  62.5% {
    transform: translate(30px, 60px);
  }
  75% {
    transform: translate(0, 60px);
  }
  87.5% {
    transform: translate(0, 30px);
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background: #fed750;
  box-shadow: 112.5px 112.5px 20px #000;
  animation: ${move} 2s ease-in-out infinite both;
  transform-style: preserve-3d;

  &:nth-child(1) {
    animation-delay: -1s;
  }

  &:nth-child(2) {
    animation-delay: -2s;
  }

  &:nth-child(3) {
    animation-delay: -3s;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
  }

  &:before {
    top: 100%;
    left: 0;
    background: #e6a32f;
    transform-origin: center top;
    transform: rotateX(-90deg);
  }

  &:after {
    top: 0;
    left: 100%;
    background: #c87932;
    transform-origin: center left;
    transform: rotateY(90deg);
  }
`;
