import styled, { css } from 'styled-components';

import { rem } from '../../styles/tools';
import { white } from '../../styles/settings';

export const SelectWrapper = styled.select`
  padding: 0.375rem 0.75rem;
  font-size: ${rem(16)};
  font-family: Avenir, sans-serif;
  border-radius: ${rem(4)};
  border: 2px solid ${white};
  color: #24282f;
  outline: none;
  transition: border-color 0.3s, background 0.3s;

  &:focus {
    border: 2px solid
      ${props => (props.error ? props.theme.danger : props.theme.primary)};
  }

  ${props =>
    props.isBlock &&
    css`
      width: 100%;
    `}
`;

export const OptionWrapper = styled.option`
  border: 50px solid;
`;
