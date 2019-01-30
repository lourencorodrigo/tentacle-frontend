import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

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
  position: absolute;
  left: 0;
  right: 0;
  border-bottom: solid ${em(1)};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 4px;
  display: flex;
  justify-content: center;
  padding: ${em(10)};
  animation: ${slideInDown} 1s linear;
  opacity: 0.9;

  ${props =>
    props.color === 'success' &&
    css`
      background-color: ${props => props.theme.alert_success};
      border-color: ${darken(0.1, props.theme.alert_success)};
    `};

  ${props =>
    props.color === 'info' &&
    css`
      background-color: ${props => props.theme.alert_info};
      border-color: ${darken(0.1, props.theme.alert_info)};
    `};

  ${props =>
    props.color === 'warning' &&
    css`
      background-color: ${props => props.theme.alert_warning};
      border-color: ${darken(0.1, props.theme.alert_warning)};
    `};

  ${props =>
    props.color === 'danger' &&
    css`
      background-color: ${props => props.theme.alert_danger};
      border-color: ${darken(0.1, props.theme.alert_danger)};
    `};
`;

export const Title = styled.h1`
  margin: 0;
  font-family: Avenir;
  font-size: ${em(16)};

  ${props =>
    props.color === 'success' &&
    css`
      color: ${darken(0.6, props.theme.alert_success)};
    `};

  ${props =>
    props.color === 'info' &&
    css`
      color: ${darken(0.6, props.theme.alert_info)};
    `};

  ${props =>
    props.color === 'warning' &&
    css`
      color: ${darken(0.6, props.theme.alert_warning)};
    `};

  ${props =>
    props.color === 'danger' &&
    css`
      color: ${darken(0.6, props.theme.alert_danger)};
    `};
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: inherit;
  font-size: ${em(20)};
  font-weight: 400;
  line-height: 1;
  color: rgba(43, 43, 43, 0.8);
  text-shadow: 0 1px 0 #fff;

  &:focus {
    outline: 0;
  }
`;

export const Span = styled.span`
  font-size: ${em(24)};
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 ${em(1)} 0 #fff;
  opacity: 0.5;
  transition: opacity 0.3s linear;

  &:focus,
  &:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
  }
`;
