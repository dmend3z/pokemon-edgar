import { createSelector } from 'reselect';

// selector que selecciona que tipo de pokemon foi seleccionado 
export const selectType = state => state.selectedType;

// selector que selecciona a pagina
export const selectPage = state => state.page;

// selector que selecciona todos os pokemons
export const selectPokemons = state => state.pokemons;

// selector que selecciona todos os tipos
export const selectAllTypes = state => state.types;

// selector que selecciona os pokemons por tipo
export const selectPokemonsByType = createSelector(selectPokemons, selectType, (pokemons, selectedType) => 
   selectedType === 'All' ? pokemons: pokemons.filter(pokemon => 
    pokemon.types.filter(type => type.type.name === selectedType.toLowerCase()).length
  )
)

// selector que seleciona os pokemons por página e tipo 
const numberOfPokemonsPerPage = 20;
export const selectPokomentsByTypeAndPage = createSelector(
  selectPokemonsByType, 
  selectPage, 
  (pokemons, page ) => 
     pokemons.slice(numberOfPokemonsPerPage * (page - 1)  , numberOfPokemonsPerPage * page)
  )