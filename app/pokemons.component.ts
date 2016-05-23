import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

import { PokemonFilterPipe } from './pokemonFilter.pipe';

@Component({
    selector: 'my-pokemons',
    templateUrl: 'app/pokemons.component.html',
    pipes:[PokemonFilterPipe]
})
export class PokemonsComponent implements OnInit{
  filterargs = '';

  pokemons: Pokemon[];
  selectedPokemon: Pokemon;

  constructor( private _router: Router, private pokemonService: PokemonService) { }

  getPokemons() {
    this.pokemonService.getPokemons().then(pokemons => this.pokemons = pokemons);
  }

  ngOnInit() {
    this.getPokemons();
  }

  onSelect(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  gotoDetail(pokemon: Pokemon) {
    this._router.navigate(['PokemonDetail', { name: pokemon.name }]);
  }

  search(searchPokemon: string) {
    this.filterargs = searchPokemon;
  }

 }
