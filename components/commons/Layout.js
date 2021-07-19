import { css } from '@emotion/react';
import { mq } from '../../commons/styles/constant';
import Header from './Header';

const layoutStyle = css`
  ${mq.xs} {
    padding: 1rem 1rem;
  }
  ${mq.sm} {
    padding: 1rem 1rem;
  }
  ${mq.md} {
    padding: 2rem 3rem;
  }
  ${mq.lg} {
    padding: 2rem 6rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main css={layoutStyle}>{children}</main>
    </>
  );
};

export default Layout;
