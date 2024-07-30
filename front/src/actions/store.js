import { applyMiddleware, createStore, compose } from "redux";
import { thunk } from "redux-thunk"; // Importación nombrada
import { reducers } from "../reducers";

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )
)
