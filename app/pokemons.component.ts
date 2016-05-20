import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'my-pokemons',
  templateUrl: 'app/pokemons.component.html',
})

export class PokemonsComponent implements OnInit {
  pokemons : Pokemon[];
  selectedPokemon : Pokemon;
  constructor(
    private _router: Router, private _pokemonService: PokemonService) { }

  getPokemons() {
    this._pokemonService.getPokemons().then(pokemons => this.pokemons = pokemons);
  }
  ngOnInit() {
    this.getPokemons();
  }
  onSelect(pokemon: Pokemon) {this.selectedPokemon = pokemon;}
}
