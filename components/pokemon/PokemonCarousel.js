import Image from 'next/image';
import styled from '@emotion/styled';
import { mq, color } from '../../commons/styles/constant';
import { useState } from 'react';
import { css } from '@emotion/react';

const PokemonCarousel = ({ imageList = [] }) => {
  const [showedPokemon, setShowedPokemon] = useState(0);

  const handleSelectThumbnail = i => {
    setShowedPokemon(i);
  };

  const renderImageList = imageList.map((image, i) => (
    <div key={i} css={thumbnailItemStyle}>
      <ThumbnalImage src={image} alt="carousel" width={60} height={60} onClick={() => handleSelectThumbnail(i)} />
      <div css={i === showedPokemon ? activeThumbnail : noActiveThumbnail} />
    </div>
  ));

  return (
    <div>
      <Container>
        <Image src={imageList[showedPokemon]} objectFit="contain" layout="fill" alt="main images" />
      </Container>
      <div css={thumbnailStyle}>{renderImageList}</div>
    </div>
  );
};

const Container = styled.div`
  ${mq.xs} {
    height: 300px;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 0 3.5px 1px rgb(0 0 0 / 10%);
    margin-bottom: 5px;
  }
  ${mq.md} {
    max-width: 300px;
  }
`;

const ThumbnalImage = styled.img`
  ${mq.xs} {
    width: 50px;
    height: 50px;
  }
`;

const thumbnailStyle = css`
  display: flex;
`;

const thumbnailItemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const activeThumbnail = css`
  width: 20px;
  border-bottom: solid 3px ${color.secondary};
`;

const noActiveThumbnail = css`
  background-color: ${color.white};
`;

export default PokemonCarousel;
