import { combineReducers } from "redux"

let dummyReducer = (state = {}) => {
  return state
}

const reducer = combineReducers({ dummy: dummyReducer })

export default reducer
