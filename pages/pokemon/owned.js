import dynamic from 'next/dynamic';
import { Grid } from '../../components/ui/Grid';
import { useContext } from 'react';
import { PokemonContext } from '../../commons/context/pokemon.context';
import Block from '../../components/ui/Block';
import SEO from '../../components/commons/Seo';

const Empty = dynamic(() => import('../../components/ui/Empty'));
const PokemonOwnedItem = dynamic(() => import('../../components/pokemon/PokemonOwnedItem'));

export default function Owned() {
  const { pokemons = {} } = useContext(PokemonContext);

  const renderPokemonList = Object.values(pokemons)
    .flat()
    .map((pokemon, i) => <PokemonOwnedItem key={i} {...pokemon} />);

  const renderEmpty =
    Object.keys(pokemons).length === 0 ? (
      <Block>
        <Empty />
      </Block>
    ) : null;

  return (
    <div>
      <SEO title="Pocke" desc="Save pokemon in a pocket" />
      <Grid xs={2} sm={3} md={4} lg={6}>
        {pokemons && renderPokemonList}
      </Grid>
      {renderEmpty}
    </div>
  );
}
