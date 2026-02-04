import type {Pokemon, ResourcePokemons} from "./interface.ts";


export const fetchResourcePokemons = async () : Promise<ResourcePokemons | null> => {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1350");
    if (!request.ok) {
        return null;
    }
    return await request.json();
}

export const fetchPokemon = async (name: string) : Promise<Pokemon | null> => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!request.ok) {
        return null;
    }
    return await request.json();
}