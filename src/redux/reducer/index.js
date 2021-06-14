import {SET_PAGE} from "../actions/constants";
const initialState = { pokemons: [], page: 1, selectedType: 'All' };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE:
            state.page = action.value;
            break;
    
        default:
            break;
    }


}



export default rootReducer;
