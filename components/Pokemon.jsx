import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { mq } from '../styles/constant';

const itemStyle = css`
  background-color: #ddd;
  padding: 20px;
  border-radius: 10%;
`;

const Item = ({ imageUrl, name, owned, onClick }) => (
  <div css={itemStyle}>
    <img src={imageUrl} />
    <p>{name}</p>
  </div>
);

const List = styled.div`
  display: grid;
  gap: 0.25rem;
  ${mq[0]} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${mq[1]} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${mq[2]} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  ${mq[3]} {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

export { Item, List };
