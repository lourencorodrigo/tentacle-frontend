import styled from 'styled-components';

import { rem } from '../../styles/tools';

export const WrapperLabel = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${rem(5)};
`;

export const Error = styled.span`
  color: ${props => props.theme.danger};
  text-transform: uppercase;
  padding-top: ${rem(8)};
  font-family: Avenir;
  font-size: ${rem(10)};
`;
