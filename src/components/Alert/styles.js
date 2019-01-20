import styled, { css } from 'styled-components';

import { em } from '../../styles/tools';

export const AlertWrapper = styled.div`
  opacity: 0.85;
  padding: ${em(12)} ${em(20)};
  margin-bottom: ${em(16)};
  border: ${em(1)} solid transparent;
  border-radius: ${em(4)};
  font-family: Avenir;
  position: relative;
  width: 100%;

  ${props =>
    props.type === 'success' &&
    css`
      background-color: #dff0d8;
      border-color: #d0e9c6;
      color: #3c763d;
    `};

  ${props =>
    props.type === 'info' &&
    css`
      background-color: #d9edf7;
      border-color: #bcdff1;
      color: #31708f;
    `};

  ${props =>
    props.type === 'warning' &&
    css`
      background-color: #fcf8e3;
      border-color: #faf2cc;
      color: #8a6d3b;
    `};

  ${props =>
    props.type === 'danger' &&
    css`
      background-color: ${props.theme.danger25};
      border-color: ${props.theme.danger15};
      color: #a94442;
    `};
`;

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${em(12)} ${em(20)};
  cursor: pointer;
  background: 0 0;
  border: 0;
  color: inherit;

  &:focus {
    outline: 0;
  }
`;

export const Span = styled.span`
  font-size: ${em(24)};
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 ${em(1)} 0 #fff;
`;
