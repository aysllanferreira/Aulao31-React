import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/PokemonList/PokeCard.scss';

export default class PokeCard extends Component {
  defineColor = (stat) => {
    const { base_stat: baseStat } = stat;
    const hue = Math.floor((baseStat * 120) / 255);
    return `hsl(${hue}, 100%, 50%)`;
  };

  render() {
    const { pokemons } = this.props;
    return (
      <div className="PokeCard">
        <h1 className="PokeCard__title">
          {pokemons.name}
        </h1>

        <img
          className="PokeCard__img"
          src={pokemons.sprites.front_default}
          alt={pokemons.name}
        />

        <ul className="PokeCard__list">
          {pokemons.stats.map((stat) => (
            <li key={stat.stat.name} className="PokeCard__list__item">
              {stat.stat.name}
              {' '}
              <span
                className="PokeCard__list__item__stat-bar"
                style={{
                  width: `${stat.base_stat}%`,
                  backgroundColor: this.defineColor(stat),
                  boxShadow: `0 0 5px ${this.defineColor(stat)}`,
                }}
              />
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

PokeCard.propTypes = {
  pokemons: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
    }).isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
      base_stat: PropTypes.number.isRequired,
      stat: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
};
