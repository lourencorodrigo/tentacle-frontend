import styled, { css } from 'styled-components';

import { rem } from '../../styles/tools';
import { white } from '../../styles/settings';
import arrow from './arrow.svg';
import loading from './loop.svg';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-right: ${rem(16)};
  overflow: hidden;
  padding: ${rem(4)} ${rem(0)};
  border-radius: ${rem(4)};
  padding-right: ${rem(16)};
  border: 2px solid ${white};
  border-color: ${props => props.focus && props.theme.primary};
  border-color: ${props => props.error && props.theme.danger};
  background: url(${props => !props.loading && arrow}) no-repeat right ${white};
  transition: border-color 0.3s;

  &::after {
    background: url(loading) no-repeat;
  }

  ${props =>
    props.loading &&
    css`
      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: url(${props => props.loading && loading}) no-repeat right;
        transition: border-color 0.3s, background 0.3s;
        border-radius: ${rem(4)};
      }
    `}
`;

export const SelectWrapper = styled.select`
  width: 100%;
  background: transparent;
  padding: ${rem(5)};
  font-size: ${rem(16)};
  line-height: 1;
  border: 0;
  border-radius: 0;
  height: ${rem(34)};
  appearance: none;
  color: #000;
  outline: none;
`;

export const OptionWrapper = styled.option`
  border: 50px solid;
`;
