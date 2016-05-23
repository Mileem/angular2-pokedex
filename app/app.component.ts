import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PokemonsComponent } from './pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
      ROUTER_PROVIDERS,
      PokemonService
    ]
})
@RouteConfig([
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: PokemonsComponent,
    useAsDefault: true
  },
  {
    path: '/pokemons/:name',
    name: 'PokemonDetail',
    component: PokemonDetailComponent },
])
export class AppComponent {
  title = 'Pokedex App';
 }
