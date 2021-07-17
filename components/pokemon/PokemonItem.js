import { css } from '@emotion/react';
import Link from 'next/link';
import { useContext } from 'react';
import { PokemonContext } from '../../commons/context/pokemon.context';
import { color } from '../../commons/styles/constant';

const PokemonItem = ({ id, image, name }) => {
  const { count } = useContext(PokemonContext);

  return (
    <Link href={`pokemon/${name}`}>
      <div css={itemStyle}>
        <p css={pokemonItemName}>{name}</p>
        <p css={pokemonOwnedCount}>
          {count(id)} <span css={pokemonOwnedText}>Owned</span>
        </p>
        <div css={imageContentStyle}>
          <img css={imageStyle} src={image} />
        </div>
      </div>
    </Link>
  );
};

const itemStyle = css`
  background-color: ${color.primary};
  border-radius: 20px;
  position: relative;
  min-height: 100px;
`;

const imageContentStyle = css`
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: visible;
  border-top-left-radius: 100px;
`;

const imageStyle = css`
  display: flex;
  flex-direction: bottom;
`;

const pokemonItemName = css`
  font-family: font-medium;
  color: ${color.white};
  max-width: 60%;
  margin-left: 1em;
  overflow: hidden;
  z-index: 999;
`;

const pokemonOwnedCount = css`
  margin-left: 1em;
  font-size: 20px;
  font-family: font-bold;
  color: ${color.tint};
`;

const pokemonOwnedText = css`
  font-size: 10px;
  font-family: font-medium;
`;

export default PokemonItem;
