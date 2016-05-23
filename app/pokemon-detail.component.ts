import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Pokemon } from './pokemon';
import { PokemonsComponent } from './pokemons.component';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'my-pokemon-detail',
  templateUrl: 'app/pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  constructor(
    private _pokemonService: PokemonService,
    private _routeParams: RouteParams) {
  }
  ngOnInit() {
    if (this._routeParams.get('name') !== null) {
      let name = this._routeParams.get('name');
      this.navigated = true;
      this._pokemonService.getPokemon(name)
          .then(pokemon => this.pokemon = pokemon);
    } else {
      this.navigated = false;
      this.pokemon = new Pokemon();
    }
  }
}
