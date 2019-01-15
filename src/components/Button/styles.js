import styled from 'styled-components';

import { rem } from '../../styles/tools';

export const Wrapper = styled.button`
  color: #fff;
  font-family: Avenir;
  font-weight: bold;
  font-size: ${rem(16)};
  background: ${props => props.theme.primary};
  border: 0;
  padding: ${rem(10)} ${rem(16)};
  width: 100%;
  display: inline-block;
  border-radius: ${rem(4)};
  user-select: none;
  border-radius: ${rem(6)};
  letter-spacing: ${rem(1.5)};
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
