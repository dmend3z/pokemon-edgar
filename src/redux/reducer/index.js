import { SET_PAGE, POKEMON_COMPLETE, SET_TYPE,SET_TYPES } from "../actions/constants";
const initialState = {
  pokemons: [],
  page: 1,
  selectedType: "All",
  types: ["All"],
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
        pokemons: action.value
      };
    }

    case SET_TYPE: {
      return {
        ...state,
        selectedType: action.value
      }
    }

    case SET_TYPES: {
      return {
        ...state,
        types: action.value
      }
    }

    default:
      return state;
  }
}

export default rootReducer;
