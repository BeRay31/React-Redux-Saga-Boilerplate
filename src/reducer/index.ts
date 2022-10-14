import { combineReducers } from "@reduxjs/toolkit"
import counter from "./counter.reducer"

const reducers = combineReducers({
  counter,
})

export default reducers
