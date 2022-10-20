import { createStore } from "redux";

const initialState = {
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setToken":
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default createStore(reducer);
