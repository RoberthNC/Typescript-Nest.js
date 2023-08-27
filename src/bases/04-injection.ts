import { HttpAdapter, PokeApiFetchAdapter } from './../api/pokeApi.adapter';
import { PokeApiAdapter } from "../api/pokeApi.adapter";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter
    ){}

    get imageUrl():string{
        return `https://pokemon.com/${this.id}.jpg`;
    }

    scream():void{
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak():void{
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves():Promise<Move[]>{
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves[0].move.name);

        return data.moves;
    }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(1, 'Charmander', pokeApiFetch);

charmander.getMoves();