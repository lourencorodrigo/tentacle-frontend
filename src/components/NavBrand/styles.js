import styled from 'styled-components';

import { em } from '../../styles/tools';

export const Wrapper = styled.div`
  color: white;
  align-self: flex-start;
  font-family: 'Avenir-Black';
  font-size: ${em(22)};
  cursor: default;

  & > a {
    color: white;
    transition: color 0.3s linear;
  }

  & > a:hover {
    color: #e2e2e2;
    text-decoration: none;
  }
`;
