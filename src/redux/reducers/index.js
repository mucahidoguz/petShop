import { combineReducers } from "redux";

import autReducer from "./autReducer/autReducer";

const reducers = combineReducers({
  autState: autReducer,
});

export default reducers;
