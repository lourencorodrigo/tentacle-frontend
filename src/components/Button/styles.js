import styled from 'styled-components';

import { em } from '../../styles/tools';

export const Wrapper = styled.button`
  color: #fff;
  font-family: Avenir;
  font-weight: bold;
  font-size: ${em(16)};
  background: ${props => props.theme.primary};
  border: 0;
  padding: ${em(10)} ${em(16)};
  width: 100%;
  display: inline-block;
  border-radius: ${em(4)};
  user-select: none;
  border-radius: ${em(6)};
  letter-spacing: ${em(1.5)};
  transition: background 0.3s ease-in-out;

  &:focus,
  &:hover {
    cursor: pointer;
    background: #6136c1;
    text-decoration: none;
    outline: 0;
  }

  &:disabled {
    background: ${props => props.theme.gray48};
    cursor: default;
  }
`;
