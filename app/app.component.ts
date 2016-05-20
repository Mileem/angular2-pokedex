import {Component, OnInit} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [PokemonService]
})
export class AppComponent implements OnInit{
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
