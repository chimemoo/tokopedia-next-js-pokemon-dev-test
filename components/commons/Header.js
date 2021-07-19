import { css } from '@emotion/react';
import Link from 'next/link';
import { useContext } from 'react';
import { PokemonContext } from '../../commons/context/pokemon.context';
import { color, fontSize, mq } from '../../commons/styles/constant';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${color.white};
  box-shadow: 0 2px 11px 1px rgb(0 0 0 / 10%);
  align-items: center;
  ${mq.xs} {
    padding: 10px 1rem;
  }
  ${mq.sm} {
    padding: 10px 1rem;
  }
  ${mq.md} {
    padding: 10px 3rem;
  }
  ${mq.lg} {
    padding: 10px 6rem;
  }
`;

const headerLogo = css`
  margin: 0px;
  font-size: ${fontSize.heading};
  font-family: font-medium;
  cursor: pointer;
`;

const ownedStyle = css`
  cursor: pointer;
`;

const ownedCountStyle = css`
  padding: 2px;
`;

const Header = () => {
  const { pokemons = {} } = useContext(PokemonContext);

  return (
    <header css={headerStyle}>
      <Link href="/">
        <a css={headerLogo}>Pokedeck</a>
      </Link>
      <Link href="/pokemon/owned">
        <a css={ownedStyle}>
          Pocket (<span css={ownedCountStyle}>{Object.values(pokemons).flat().length}</span>)
        </a>
      </Link>
    </header>
  );
};

export default Header;
