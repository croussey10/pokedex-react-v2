import type {Pokemon} from "./interface.ts";


export const fetchPokemon = async (name: string) : Promise<Pokemon | null> => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!request.ok) {
        return null;
    }
    return await request.json();
}