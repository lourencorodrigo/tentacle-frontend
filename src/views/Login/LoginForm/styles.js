import styled, { css } from 'styled-components';

import { rem, media } from '../../../styles/tools';
import { white } from '../../../styles/settings';

export const Wrapper = styled.div`
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

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.h1`
  font-family: Avenir-Black;
  font-weight: 900;
  text-align: center;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
  color: ${white};
  font-size: ${rem(30)};
`;

export const Description = styled.h1`
  font-family: Avenir;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  padding-bottom: ${rem(26)};
  letter-spacing: 2.5px;
  text-align: center;
  color: ${white};
  font-size: ${rem(16)};
`;

export const ContentLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${rem(16)};
  width: 100%;
`;
