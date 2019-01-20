import styled from 'styled-components';

import { em } from '../../styles/tools';
import { white } from '../../styles/settings';

export const InputWrapper = styled.input`
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: ${em(16)};
  color: '#24282f';
  font-family: Avenir, sans-serif;
  width: 100%;
  border-radius: ${em(4)};
  border: ${em(2)} solid ${props => (props.error ? props.theme.danger : white)};
  background: ${white};
  transition: border-color 0.3s, background 0.3s;
  outline: none;

  &:disabled {
    background: ${props => props.theme.gray48};
    border: ${em(2)} solid ${props => props.theme.gray48};
  }

  &:focus {
    border: ${em(2)} solid
      ${props => (props.error ? props.theme.danger : props.theme.primary)};
    background: ${white};
  }
`;
