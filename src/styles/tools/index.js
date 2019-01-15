import { css } from 'styled-components';

const SCREEN_LG = 1199;
const SCREEN_MD = 992;
const SCREEN_SM = 767;
const SCREEN_XS = 449;
const SCREEN_XXS = 319;

export const em = value => `${value / 16}em`;

export const media = {
  lg: content => css`
    @media (min-width: ${em(SCREEN_LG)}) {
      ${content};
    }
  `,
  md: content => css`
    @media (min-width: ${em(SCREEN_MD)}) {
      ${content};
    }
  `,
  sm: content => css`
    @media (min-width: ${em(SCREEN_SM)}) {
      ${content};
    }
  `,
  xs: content => css`
    @media (min-width: ${em(SCREEN_XS)}) {
      ${content};
    }
  `,
  xxs: content => css`
    @media (min-width: ${em(SCREEN_XXS)}) {
      ${content};
    }
  `
};
