import React, { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import { PokeListContainer } from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext";

const PokemonListScreen = () => {
    const {pokemons} = useContext(GlobalStateContext)
    return (
    <>
        <Header/>
        <PokeListContainer>
            {
                pokemons.map((poke) => {
                    return <PokemonCard key={poke.name} pokemon = {poke}/>
                })
            }      
        </PokeListContainer>    
    </>
 )
}

export default PokemonListScreen