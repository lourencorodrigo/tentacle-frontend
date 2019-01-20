import styled from 'styled-components';

import { em } from '../../styles/tools';

export const Label = styled.label`
  font-family: Avenir;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${em(16)};
  letter-spacing: ${em(1.6)};
  color: #fff;
  transition: color 0.3s linear;
  margin: 0;
`;
