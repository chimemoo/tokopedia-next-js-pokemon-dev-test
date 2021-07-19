import { css } from '@emotion/react';
import { mq } from '../../commons/styles/constant';

const Shimmer = ({ length = 6 }) => {
  return (
    <>
      {new Array(length).fill(0).map((_, i) => (
        <div key={i} css={itemStyle}></div>
      ))}
    </>
  );
};

const itemStyle = css`
  border-radius: 20px;
  position: relative;
  animation: shimmer 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  background-size: 1000px 100%;
  ${mq.xs} {
    min-height: 120px;
  }
  ${mq.md} {
    min-height: 160px;
  }
  ${mq.lg} {
    min-height: 200px;
  }
`;

export default Shimmer;
