import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchPokemon} from "./api.ts";
import type {Pokemon} from "./interface.ts";

export function Pokemon() {

    const { name } = useParams()
    const [pokemonInfos, setPokemonInfos] = useState<Pokemon | null>(null);

    useEffect(() => {
        const loadPokemonInfos = async () => {
            try {
                if (!name) {
                    return;
                }
                const data = await fetchPokemon(name)
                setPokemonInfos(data)
            } catch (error) {
                console.error(error)
            }
        }
        void loadPokemonInfos()
    }, [name]);

    if (!pokemonInfos) {
        return <p> Chargement des infos du pokémon... </p>
    }

    const nextPokemonId = pokemonInfos.id + 1;
    const prevPokemonId = pokemonInfos.id - 1;

    return (
        <div>
            <Link to={`/`}>
                <button id="btn-previous">Home</button>
            </Link>
            <Link to={`/pokemon/${prevPokemonId}`}>
                <button id="btn-previous">Previous</button>
            </Link>
            <Link to={`/pokemon/${nextPokemonId}`}>
                <button id="btn-previous">Next</button>
            </Link>
            <h1> {pokemonInfos.name} </h1>
            <p> ID : {pokemonInfos.id} </p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfos.id}.png`} alt={`${pokemonInfos.name}-image`} />
            <audio controls src={pokemonInfos.cries.latest} ></audio>
            { pokemonInfos.stats.map((el) => (
                <p key={el.stat.name}> {el.stat.name} : {el.base_stat} </p>
            )) }
        </div>
    );
}