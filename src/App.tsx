import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Pokedex} from "./pages/pokedex.tsx";
import {Pokemon} from "./pages/pokemon.tsx";

function App() {
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
