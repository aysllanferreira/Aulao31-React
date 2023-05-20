import React, { Component } from 'react';
import fetchPokemonData from '../../utils/fetchData';
import PokeCard from './components/PokeCard';

export default class PokeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: [],
    };
  }

  async componentDidMount() {
    const pokemonData = await fetchPokemonData();
    this.setState({ pokemonData });
  }

  render() {
    const { pokemonData } = this.state;
    console.log(pokemonData);
    return (
      <div>
        {pokemonData.map((pokemon) => (
          <PokeCard key={pokemon.name} pokemons={pokemon} />
        ))}
      </div>
    );
  }
}
