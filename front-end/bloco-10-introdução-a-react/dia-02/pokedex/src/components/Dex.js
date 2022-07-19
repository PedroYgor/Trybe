import React, { Component } from "react";
import pokemons from "./data";
import { Pokemon } from "./Pokemon";

export class Dex extends Component {
  render() {
    return (
      <div>
        <h1>pokedex</h1>
        <div className="pokedex">
        {pokemons.map((pokemon, index) => <Pokemon key={index} infoPokemon={pokemon} />)}
        </div>
      </div>
    )
  }
}

