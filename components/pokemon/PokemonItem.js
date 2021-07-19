import { css } from '@emotion/react';
import Link from 'next/link';
import { useContext } from 'react';
import { PokemonContext } from '../../commons/context/pokemon.context';
import { color, fontSize, mq } from '../../commons/styles/constant';

const PokemonItem = ({ id, image, name }) => {
  const { count } = useContext(PokemonContext);

  return (
    <div css={itemStyle}>
      <Link href={`/pokemon/${name}`}>
        <a
          css={css`
            text-decoration: none;
            cursor: pointer;
          `}
        >
          <p css={pokemonItemName}>{name}</p>
          <p css={pokemonOwnedCount}>
            {count(id)} <span css={pokemonOwnedText}>Owned</span>
          </p>
          <div css={imageContentStyle}>
            <img css={imageStyle} src={image} />
          </div>
        </a>
      </Link>
    </div>
  );
};

const PokemonOwnedItem = ({ id, image, name, name_alias }) => {
  const { count, remove } = useContext(PokemonContext);

  return (
    <div css={itemStyle}>
      <Link href={`/pokemon/${name}`}>
        <a
          css={css`
            text-decoration: none;
            cursor: pointer;
          `}
        >
          <p css={pokemonItemName}>
            {name_alias} / {name}
          </p>
          <p css={pokemonOwnedCount}>
            {count(id)} <span css={pokemonOwnedText}>Owned</span>
          </p>
          <div css={imageContentStyle}>
            <img css={imageStyle} src={image} />
          </div>
        </a>
      </Link>
      <button css={deleteStyle} onClick={() => remove(id, name_alias)}>
        <img src="/delete.svg" css={deleteStyle} />
      </button>
    </div>
  );
};

const deleteStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 25px;
`;

const itemStyle = css`
  background-color: ${color.primary};
  border-radius: 20px;
  position: relative;
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

const imageContentStyle = css`
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: visible;
  border-top-left-radius: 100%;
`;

const imageStyle = css`
  display: flex;
  flex-direction: bottom;
  ${mq.xs} {
    width: 80px;
  }
  ${mq.md} {
    width: 120px;
  }
  ${mq.lg} {
    width: 140px;
  }
`;

const pokemonItemName = css`
  font-family: font-medium;
  font-size: ${fontSize.medium};
  color: ${color.white};
  max-width: 60%;
  margin-left: 1rem;
  margin-top: 1rem;
  overflow: hidden;
  z-index: 999;
`;

const pokemonOwnedCount = css`
  margin-left: 1em;
  font-size: ${fontSize.large};
  font-family: font-bold;
  color: ${color.tint};
`;

const pokemonOwnedText = css`
  font-size: 10px;
  font-family: font-medium;
`;

export { PokemonItem, PokemonOwnedItem };
