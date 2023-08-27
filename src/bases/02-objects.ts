export const pokemonIds = [1,2,3,4,5];

interface Pokemon{
    id:number,
    name:string,
    power?:number
}

export const bulbasaur:Pokemon = {
    id:1,
    name:'Bulbasaur',
    power:1500
}

export const charmander:Pokemon = {
    id:2,
    name:"Charmander",
    power:1500
}

export const pokemons:Pokemon[] = [];

pokemons.push({
    id:3,
    name:"Chikorita"
})

console.log(pokemons)