import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { em } from '../../styles/tools';

export const Wrapper = styled(Link)`
  font-family: Avenir;
  font-weight: bold;
  letter-spacing: ${em(1.9)};
  font-size: ${em(16)};
  color: #fff;
  transition: color 0.15s linear;
  padding-top: ${em(5)};

  &:hover {
    color: #d8d8d8;
    text-decoration: none;
  }
`;
