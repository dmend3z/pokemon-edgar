import {SET_PAGE, POKEMON_START, POKEMON_FAILURE, POKEMON_COMPLETE, SET_TYPE} from "constants"

export const setPage = (page) => ({
    type: SET_PAGE,
    value: page
})

export const selectType = (type) => ({
    type: SET_TYPE,
    value: type
})

export const fetchStart = () => ({
    type: POKEMON_START
})

export const fetchFailure = () =>({
    type: POKEMON_FAILURE
})


export const fetchComplete = (pokemons) => ({
    type: POKEMON_COMPLETE,
    value: pokemons
})


