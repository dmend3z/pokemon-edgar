import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/index";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;