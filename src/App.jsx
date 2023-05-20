import React, { Component } from 'react';
import { Footer, Hero, PokeCards } from './components';

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <PokeCards />
        <Footer />
      </div>
    );
  }
}
