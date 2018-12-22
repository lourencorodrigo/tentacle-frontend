import { css } from 'styled-components';

const SCREEN_LG = 1199;
const SCREEN_MD = 992;
const SCREEN_SM = 767;
const SCREEN_XS = 449;
const SCREEN_XXS = 319;

export const rem = value => `${value / 16}rem`;

export const media = {
  lg: content => css`
    @media (min-width: ${rem(SCREEN_LG)}) {
      ${content};
    }
  `,
  md: content => css`
    @media (min-width: ${rem(SCREEN_MD)}) {
      ${content};
    }
  `,
  sm: content => css`
    @media (min-width: ${rem(SCREEN_SM)}) {
      ${content};
    }
  `,
  xs: content => css`
    @media (min-width: ${rem(SCREEN_XS)}) {
      ${content};
    }
  `,
  xxs: content => css`
    @media (min-width: ${rem(SCREEN_XXS)}) {
      ${content};
    }
  `
};
