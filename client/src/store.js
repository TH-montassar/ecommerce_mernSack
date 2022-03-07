import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk"; //meddillware  redux
import rootReducer from "./reducers";

const initialSate = {};
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialSate,
  composeWithDevTools(applyMiddleware(...middleware))
);
//! fi ay project redux nafs config
