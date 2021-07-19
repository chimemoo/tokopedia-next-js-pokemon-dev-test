import { css } from '@emotion/react';
import { Global } from '@emotion/react';
import { color } from './constant';

export const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'font-medium';
        src: url(/assets/fonts/Poppins/Poppins-Medium.ttf);
      }

      @font-face {
        font-family: 'font-bold';
        src: url(/assets/fonts/Poppins/Poppins-Bold.ttf);
      }

      @font-face {
        font-family: 'font-light';
        src: url(/assets/fonts/Poppins/Poppins-Light.ttf);
      }

      body {
        padding: 0;
        margin: 0;
        background-color: ${color.white};
      }

      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        padding: 0;
        margin: 0;
      }

      button {
        background: transparent;
        box-shadow: 0px 0px 0px transparent;
        border: 0px solid transparent;
        text-shadow: 0px 0px 0px transparent;
        cursor: pointer;
      }
    `}
  />
);
