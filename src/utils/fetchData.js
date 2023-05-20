const fetchPokemonData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const { results } = await response.json();

  const fetchAllPokemons = results.map(async ({ url }) => {
    const responses = await fetch(url);
    const datas = await responses.json();
    return datas;
  });

  return Promise.all(fetchAllPokemons);
};

export default fetchPokemonData;
