import styled from 'styled-components';

import { rem } from '../../styles/tools';

export const Label = styled.label`
  font-family: Avenir;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${rem(16)};
  letter-spacing: 1.6px;
  color: #fff;
  transition: color 0.3s linear;
  margin: 0;
`;
