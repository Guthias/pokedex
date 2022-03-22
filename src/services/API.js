export const getPokemonList = async () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const response = await fetch(URL);
  const { results } = await response.json();
  
  const detailsPromise = results.map(({ name }) => getPokemonDetails(name))
  const pokemonList = await Promise.all(detailsPromise);
  return pokemonList;
}

export const getPokemonDetails = async (name) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}