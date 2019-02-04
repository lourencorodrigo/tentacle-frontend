import styled from 'styled-components';

import { em } from '../../styles/tools';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1071;
  min-height: ${em(72)};
  background: #33363b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${em(16)};
`;
