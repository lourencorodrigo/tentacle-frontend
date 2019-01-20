import styled from 'styled-components';

import { em } from '../../styles/tools';

export const WrapperLabel = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${em(5)};
`;

export const Error = styled.span`
  color: ${props => props.theme.danger};
  text-transform: uppercase;
  padding-top: ${em(8)};
  font-family: Avenir;
  font-size: ${em(10)};
`;
