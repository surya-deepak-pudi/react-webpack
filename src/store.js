import { applyMiddleware, createStore, compose } from "redux"
import Thunk from "redux-thunk"

import reducer from "./reducers"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(Thunk)))

export default store
