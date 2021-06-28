import {
  SET_PAGE,
  POKEMON_START,
  POKEMON_FAILURE,
  POKEMON_COMPLETE,
  SET_TYPE,
  SET_TYPES,
  POKEMON_FETCH_ALL_URLS
} from "./constants";

import { getAllTypes } from "./utils"

export const setPage = (page) => ({
  type: SET_PAGE,
  value: page,
});

export const selectType = (type) => ({
  type: SET_TYPE,
  value: type,
});

export const fetchStart = () => ({
  type: POKEMON_START,
});

export const fetchFailure = () => ({
  type: POKEMON_FAILURE,
});

export const fetchComplete = (pokemons) => ({
  type: POKEMON_COMPLETE,
  value: pokemons
});

export const fetchAllUrls = () => ({
  type: POKEMON_FETCH_ALL_URLS,
})

export const setTypes = (pokemons) => ({
  type: SET_TYPES, 
  value: getAllTypes(pokemons)
})
  

export const fetchPokemons = () => {
  return async (dispatch) => {
    let allPokemons = []
    dispatch(fetchStart());
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
      .then((response) => response.json())
      .then(async data => {
        dispatch(fetchAllUrls());

        const allPokemonPromises = data.results.map(async pokemon => 
          await fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            const {name, height, weight, stats, types, sprites} = data
            allPokemons = [...allPokemons, {name, height,weight, stats, types, sprites}]
          })
          .catch((error) => dispatch(fetchFailure(error)))
        )

        Promise.all(allPokemonPromises).then(() => { 
          console.log('Entrei')
          dispatch(fetchComplete(allPokemons))
          dispatch(setTypes(allPokemons))
        })

    }).catch((error) => dispatch(fetchFailure(error)))
  }
};
