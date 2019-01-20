import styled from 'styled-components';

import { em } from '../../../../styles/tools';

export const CityStateWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const StateWrapper = styled.div`
  padding-right: ${em(5)};
  width: 33.33%;
`;

export const CityWrapper = styled.div`
  padding-right: ${em(5)};
  width: 66.66%;
`;
