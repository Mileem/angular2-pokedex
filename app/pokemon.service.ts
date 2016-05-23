import { Injectable } from '@angular/core';

import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonService {
  getPokemons() {
    return Promise.resolve(POKEMONS);
  }

  getPokemon(name : string) {
    //TODO HTTP service qui va récupérer les infos via l'API
    return Promise.resolve(POKEMONS).then(pokemons => pokemons.filter(pokemon => pokemon.name === name)[0]);
  }
}
