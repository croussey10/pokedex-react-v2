import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Pokedex} from "./pages/pokedex.tsx";
import {Pokemon} from "./pages/pokemon.tsx";
import {fetchResourcePokemons} from "./pages/api.ts";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        const getAllPokemonsName = async () => {
            const allPokemonsName: string[] = [];
            const resourcePokemons = await fetchResourcePokemons();
            resourcePokemons?.results.map((el) => allPokemonsName.push(el.name));
            return allPokemonsName
        }
        const setAllPokemonsNameInLocalStorage = async () => {

        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pokedex />} />
                <Route path="/pokemon/:name" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
