 import React from "react";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import PokemonListScreen from "../screens/PokemonsListScreen/PokemonListScreen"
 import PokemonDetailScreen from "../screens/PokemonDetailScreen/PokemonDetailScreen"
 import PokedexScreen from "../screens/PokedexScreen/PokedexScreen"

 const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<PokemonListScreen/>}  />
            <Route path = "/pokemon/:name" element = {<PokemonDetailScreen/>}  />
            <Route path = "/pokedex" element = {<PokedexScreen/>}  />
        </Routes>
    </BrowserRouter>
    )
 }

 export default Router