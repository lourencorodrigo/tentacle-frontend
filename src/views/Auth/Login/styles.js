import styled, { css } from 'styled-components';

import { rem, media } from '../../../styles/tools';

export const WrapperForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${rem(30)} ${rem(20)};
  background: rgba(255, 255, 255, 0.16);
  border-radius: ${rem(0)};
  width: 92%;
  height: 92%;
  border-radius: ${rem(10)};
  transition: width 0.15s linear;

  ${media.sm(css`
    padding: ${rem(40)} ${rem(50)};
    width: ${rem(550)};
    height: auto;
  `)};
`;

export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${rem(16)};
  width: 100%;
  font-family: Avenir-Black;
`;
