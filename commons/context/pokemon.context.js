import { useEffect, useState, createContext } from 'react';

const POKEMON_KEY = 'pokemons';

export const PokemonContext = createContext({
  save: () => {},
  find: () => {},
  remove: () => {},
  count: () => {},
  pokemons: {},
});

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    if (global.localStorage.getItem(POKEMON_KEY)) {
      setPokemons(JSON.parse(global.localStorage.getItem(POKEMON_KEY)));
    }
  }, []);

  useEffect(() => {
    if (pokemons) {
      global.localStorage.setItem(POKEMON_KEY, JSON.stringify(pokemons));
    }
  }, [pokemons]);

  const save = (key, data) => {
    let pokemonList = JSON.parse(JSON.stringify(pokemons));
    if (pokemonList[key]) {
      pokemonList[key].push(data);
    } else {
      pokemonList[key] = [];
      pokemonList[key].push(data);
    }
    setPokemons(pokemonList);
  };

  const remove = (key, name) => {
    let pokemonList = JSON.parse(JSON.stringify(pokemons));
    if (pokemonList[key]) {
      const idx = pokemonList[key].findIndex(x => x.name_alias == name);
      pokemonList[key].splice(idx, 1);
      if (pokemonList[key].length == 0) {
        delete pokemonList[key];
      }
    }
    setPokemons(pokemonList);
  };

  const find = (key, name) => {
    return pokemons[key]?.some(x => x.name_alias == name);
  };

  const count = key => {
    if (!pokemons[key]) return 0;
    return Object.values(pokemons[key]).flat().length;
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        save,
        find,
        count,
        remove,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
