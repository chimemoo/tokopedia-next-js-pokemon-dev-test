import { gql } from '@apollo/client';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const GET_POKEMON = gql`
  query getpokemon($name: String!) {
    pokemon(name: $name) {
      id
      weight
      name
      base_experience
      moves {
        move {
          name
        }
      }
      height
      abilities {
        ability {
          name
        }
      }
      types {
        slot
        type {
          name
        }
      }
      sprites {
        back_default
        back_shiny
        front_default
        front_shiny
      }
    }
  }
`;

export { GET_POKEMON, GET_POKEMONS };
