import { css } from '@emotion/react';
import { Global } from '@emotion/react';

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
    `}
  />
);
