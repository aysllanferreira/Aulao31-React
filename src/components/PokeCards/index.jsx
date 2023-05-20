import React, { Component } from 'react';
import fetchPokemonData from '../../utils/fetchData';
import PokeCard from './components/PokeCard';
import LoadingCard from './components/LoadingCard';
import '../../styles/PokemonList/PokemonList.scss';

export default class PokeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const pokemonData = await fetchPokemonData();
    this.setState({ pokemonData, loading: false });
  }

  render() {
    const { pokemonData, loading } = this.state;
    console.log(pokemonData);
    return (
      <div className="PokemonList">
        {loading ? (
          Array(20)
            .fill(0)
            .map((_, index) => <LoadingCard key={index} />)
        ) : (
          pokemonData.map((pokemon) => (
            <PokeCard key={pokemon.name} pokemons={pokemon} />
          ))
        )}
      </div>
    );
  }
}
