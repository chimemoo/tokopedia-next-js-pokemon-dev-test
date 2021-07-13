import { PokemonProvider } from './pokemon.context';

export default function ContextProvider({ children }) {
  return <PokemonProvider>{children}</PokemonProvider>;
}
