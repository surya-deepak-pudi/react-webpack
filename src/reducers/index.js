import { combineReducers } from "redux"

let dummyReducer = (state = {}) => {
  return state
}

const reducer = combineReducers({ dummy: combineReducers })

export default reducer
