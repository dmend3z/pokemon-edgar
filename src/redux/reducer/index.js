import { SET_PAGE, POKEMON_COMPLETE } from "../actions/constants";
const initialState = {
  pokemons: [],
  page: 1,
  selectedType: "All",
  types: ["normal", "fire", "water", "eletric", "psychic", "fly", "rock"],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE: {
      return {
        ...state,
        page: action.value,
      };
    }

    case POKEMON_COMPLETE: {
      return {
        ...state,
        pokemons: action.value,
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
