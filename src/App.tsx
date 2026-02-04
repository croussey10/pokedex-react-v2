import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Pokedex} from "./pages/pokedex.tsx";
import {Pokemon} from "./pages/pokemon.tsx";
import {fetchResourcePokemons} from "./pages/api.ts";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        const getAllPokemonsName = async () => {
            const resourcePokemons = await fetchResourcePokemons();
            return resourcePokemons?.results.map((el) => el.name)
        }

        const setAllPokemonsNameInLocalStorage = async () => {
            const allPokemonsNameLocal = await getAllPokemonsName();
            localStorage.setItem("allPokemonsNameLocal", JSON.stringify(allPokemonsNameLocal))
        }

        if (!localStorage.getItem("allPokemonsNameLocal")) {
            void setAllPokemonsNameInLocalStorage();
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
