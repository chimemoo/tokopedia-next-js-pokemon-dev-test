import { css } from '@emotion/react';
import { mq } from '../../commons/styles/constant';

export const Grid = ({ children, xs = 1, sm = xs, md = sm, lg = md, xl = lg, gap = 0.8 }) => (
  <div
    css={css`
      display: grid;
      gap: ${gap}rem;
      ${mq.xs} {
        grid-template-columns: repeat(${xs}, minmax(0, 1fr));
      }

      ${mq.sm} {
        grid-template-columns: repeat(${sm}, minmax(0, 1fr));
      }

      ${mq.md} {
        grid-template-columns: repeat(${md}, minmax(0, 1fr));
      }

      ${mq.lg} {
        grid-template-columns: repeat(${lg}, minmax(0, 1fr));
      }

      ${mq.xl} {
        grid-template-columns: repeat(${xl}, minmax(0, 1fr));
      }
    `}
  >
    {children}
  </div>
);

export const Column = ({ children, xs = 1, sm = xs, md = xs, lg = md, xl = lg }) => (
  <div
    css={css`
      ${mq.xs} {
        grid-column: span ${xs} / span ${xs};
      }

      ${mq.sm} {
        grid-column: span ${sm} / span ${sm};
      }

      ${mq.md} {
        grid-column: span ${md} / span ${md};
      }

      ${mq.lg} {
        grid-column: span ${lg} / span ${lg};
      }

      ${mq.xl} {
        grid-column: span ${xl} / span ${xl};
      }
    `}
  >
    {children}
  </div>
);
