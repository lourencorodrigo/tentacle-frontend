import styled, { css } from 'styled-components';

import { rem, media } from '../../../styles/tools';

export const WrapperForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${em(30)} ${em(20)};
  background: rgba(255, 255, 255, 0.16);
  border-radius: ${em(0)};
  width: 92%;
  height: 92%;
  border-radius: ${em(10)};
  transition: width 0.15s linear;

  ${media.sm(css`
    padding: ${em(40)} ${em(50)};
    width: ${em(550)};
    height: auto;
  `)};
`;
