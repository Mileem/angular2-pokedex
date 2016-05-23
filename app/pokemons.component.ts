import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'my-pokemons',
    templateUrl: 'app/pokemons.component.html'
})
export class PokemonsComponent implements OnInit{
  pokemons: Pokemon[];
  selectedPokemon: Pokemon;

  constructor( private _router: Router, private pokemonService: PokemonService) { }

  getPokemons() {
    console.log(this.pokemonService.getPokemons());
    this.pokemonService.getPokemons().then(pokemons => this.pokemons = pokemons)
  }

  ngOnInit() {
    this.getPokemons();
  }

  onSelect(pokemon: Pokemon) {
    console.log(pokemon);
    this.selectedPokemon = pokemon;
  }

  gotoDetail(pokemon: Pokemon) {
    this._router.navigate(['PokemonDetail', { name: pokemon.name }]);
  }

 }
