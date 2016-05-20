import { Injectable } from '@angular/core';

import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonService {
  getPokemons() {
    return Promise.resolve(POKEMONS);
  }
}
