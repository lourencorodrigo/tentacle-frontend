import styled from 'styled-components';

import { em } from '../../styles/tools';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1071;
  min-height: ${em(64)};
  background: #33363b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${em(16)};
`;
