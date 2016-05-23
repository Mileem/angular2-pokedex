import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=51&offset=0';
  constructor(private http: Http){}

  getPokemons(): Promise<Pokemon[]> {
    return this.http.get(this.pokemonUrl)
    .toPromise()
    .then(response => response.json().results)
    .catch(this.handleError);
    //return Promise.resolve(POKEMONS);
  }

  getPokemon(name : string) {
    //TODO HTTP service qui va récupérer les infos via l'API
    return this.getPokemons()
               .then(pokemons => pokemons.filter(pokemon => pokemon.name === name)[0]);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
