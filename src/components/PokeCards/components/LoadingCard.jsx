import React, { Component } from 'react';
import '../../../styles/PokemonList/LoadingCard.scss';

export default class LoadingCard extends Component {
  render() {
    return (
      <div className="LoadingCard">
        <div className="LoadingCard__image" />
        <div className="LoadingCard__text" />
        <div className="LoadingCard__text" />
        <div className="LoadingCard__text" />
        <div className="LoadingCard__text" />
        <div className="LoadingCard__text" />
      </div>
    );
  }
}
