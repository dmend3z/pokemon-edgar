import { SET_PAGE , POKEMON_COMPLETE} from "../actions/constants";
const initialState = { pokemons: [], page: 1, selectedType: 'All', types: ['normal', 'fire', 'water', 'eletric','psychic','fly','rock'] };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE:
            state.page = action.value;
            break;
        case POKEMON_COMPLETE:
            state.pokemons = action.value;
            break;
    
        default:
            return state; 
    };
};

export default rootReducer;
