import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'pokemonfilter',
    pure: false
})
@Injectable()
export class PokemonFilterPipe implements PipeTransform {
    transform(items: any[], args: any): any {
        return items.filter(item => item.name.indexOf(args.title) !== -1);
    }
}
