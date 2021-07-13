import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import client from '../../commons/graphql/client';
import { GET_POKEMON } from '../../commons/graphql/query';
import PokemonCarousel from '../../components/pokemon/[name]/PokemonCarousel';

export default function Pokemon(props) {
  const {
    pokemon: { id, weight, name, base_experience, moves, height, abilities, types, sprites },
  } = props;

  const { back_default, back_shiny, front_default, front_shiny } = sprites ?? {};

  const images = [back_default, back_shiny, front_default, front_shiny];

  const [thumbnail, setThumbnail] = useState(images[0]);

  return (
    <div>
      <div>
        <PokemonCarousel imageList={images} />
        {/* <Image src={thumbnail} alt={`${name}'s image`} objectFit="contain" layout="fill" /> */}
      </div>
      <p>{name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { name },
  } = context;

  const {
    data: { pokemon },
  } = await client.query({
    query: GET_POKEMON,
    variables: {
      name,
    },
  });

  return {
    props: {
      pokemon,
    },
  };
}
