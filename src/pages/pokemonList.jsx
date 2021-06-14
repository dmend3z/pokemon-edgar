
import React, {useEffect} from "react"
import Dropdown from "../components/dropdown"
import Pagination from "../components/pagination"
import CardsList from "../components/cardsList"

const PokemonList = () => {

    useEffect(() => {

    }, []) 

    return (
        <main>
            <Dropdown />
            < CardsList />
            <Pagination />
        </main>
    )
    
}

export default PokemonList