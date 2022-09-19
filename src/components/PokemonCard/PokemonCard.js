import React from "react";
import {
    PokeCardContainer,
    ImgContainer,
    PokeImg,
    ButtonsContainer
  } from "./styled";

const PokemonCard = () => {
    return (
        <PokeCardContainer>
            <ImgContainer>
            <PokeImg
            src = {""}
            alt = {"pokemon"}
            />
            </ImgContainer>
            <ButtonsContainer>
                <button>
                    Adicionar a Pokedex
                </button>
                <button>
                    Ver Detalhes
                </button>
                </ButtonsContainer>
            PokemonCard
        </PokeCardContainer>
    )
}

export default PokemonCard