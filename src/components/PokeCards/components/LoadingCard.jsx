import React, { Component } from 'react';
import '../../../styles/PokemonList/LoadingCard.scss';

export default class LoadingCard extends Component {
  render() {
    return (
      <div className="LoadingCard">
        <div className="loading__image" />
        <div className="loading__text" />
        <div className="loading__text" />
        <div className="loading__text" />
        <div className="loading__text" />
        <div className="loading__text" />
      </div>
    );
  }
}
