import { css } from '@emotion/react';
import { mq } from '../../commons/styles/constant';

const Col = ({ children, xs, sm, md, lg, xl }) => {
  let widthStyle = ``;

  if (xs) {
    widthStyle += `${mq.xs} { width: calc(100% / 12 * ${xs}); }`;
  }

  if (sm) {
    widthStyle += `${mq.sm} { width: calc(100% / 12 * ${sm}); }`;
  }

  if (md) {
    widthStyle += `${mq.md} { width: calc(100% / 12 * ${md}); }`;
  }

  if (lg) {
    widthStyle += `${mq.lg} { width: calc(100% / 12 * ${lg}); }`;
  }

  if (xl) {
    widthStyle += `${mq.xl} { width: calc(100% / 12 * ${xl}); }`;
  }

  return (
    <div
      css={css`
        height: 100%;
        ${widthStyle}
      `}
    >
      {children}
    </div>
  );
};

export default Col;
