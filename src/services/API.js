export const getPokemonList = async () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const response = await fetch(URL);
  const { results } = await response.json();
  return results;
}
