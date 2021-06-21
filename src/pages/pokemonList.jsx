import { useDispatch } from 'react-redux';
import { fetchPokemons }  from "../redux/actions/";
import React, {useEffect} from "react";
import Dropdown from "../components/dropdown";
import Pagination from "../components/pagination";
import CardsList from "../components/cardsList";

const PokemonList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemons());
    }, []);

    return (
        <main>
            <Dropdown />
            <CardsList />
            <Pagination />
        </main>
    )
    
}

export default PokemonList;