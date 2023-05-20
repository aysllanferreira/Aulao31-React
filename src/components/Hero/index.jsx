import React, { Component } from 'react';
import '../../styles/Hero/Hero.scss';
import Pokeball from '../../assets/pokeball.svg';

export default class Hero extends Component {
  render() {
    return (
      <div className="Header">
        <img className="Header__img" src={Pokeball} alt="Pokeball" />
        <h1 className="Header__title">Pokedex React</h1>
        <img className="Header__img" src={Pokeball} alt="Pokeball2" />
      </div>
    );
  }
}
