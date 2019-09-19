import { createStore, compose } from "redux";

import reducers from "./reducers/index.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
    return createStore(reducers, initialState, composeEnhancers());
}
