import styled, { css } from 'styled-components';

import { em } from '../../styles/tools';
import { white } from '../../styles/settings';
import arrow from './arrow.svg';
import loading from './loading.gif';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-right: ${em(16)};
  overflow: hidden;
  padding: ${em(3)} ${em(0)};
  border-radius: ${em(4)};
  padding-right: ${em(16)};
  border: ${em(2)} solid ${white};
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
        right: ${em(5)};
        top: 0;
        bottom: 0;
        background: url(${props => props.loading && loading}) no-repeat right;
        transition: border-color 0.3s, background 0.3s;
        border-radius: ${em(4)};
      }
    `}
`;

export const SelectWrapper = styled.select`
  width: 100%;
  background: transparent;
  padding: ${em(5)};
  font-size: ${em(16)};
  line-height: 1;
  border: 0;
  border-radius: 0;
  height: ${em(34)};
  appearance: none;
  color: #000;
  outline: none;
`;

export const OptionWrapper = styled.option`
  border: 0 solid;
`;
