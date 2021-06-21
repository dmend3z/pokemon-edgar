import React from "react";
import Card from "./card";
import { selectPokemons }  from "../redux/selectors";
import { useSelector } from "react-redux";

const CardsList = (props) => {

    const pokemons = useSelector(selectPokemons);

    return (
        <>
            {pokemons.map (pokemon => <Card />)}
        </>
    );
}

export default CardsList;