import {Component, OnInit} from '@angular/core';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'my-pokemons',
    templateUrl: 'app/pokemons.component.html'
})
export class PokemonsComponent implements OnInit{
  pokemons: Pokemon[];
  selectedPokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  getPokemons() {
    this.pokemonService.getPokemons().then(pokemons => this.pokemons = pokemons)
  }

  ngOnInit() {
    this.getPokemons();
  }

  onSelect(pokemon: Pokemon) { this.selectedPokemon = pokemon; }

 }
