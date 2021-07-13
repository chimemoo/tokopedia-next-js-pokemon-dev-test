import Image from 'next/image';
import styled from '@emotion/styled';
import { mq } from '../../../commons/styles/constant';

const Container = styled.div`
  ${mq[0]} {
    height: 50vh;
  }
`;

const PokemonCarousel = ({ imageList = [] }) => {
  const renderImageList = imageList.map((image, i) => <Image key={i} src={image} objectFit="contain" layout="fill" />);
  return <Container>{renderImageList}</Container>;
};

export default PokemonCarousel;
