import { css } from '@emotion/react';

const Empty = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 300px;
    `}
  >
    Data is empty
  </div>
);

export default Empty;
