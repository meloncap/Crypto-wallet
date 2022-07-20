import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cryptoDataReducer } from "./reducers/cryptoDataReducer";

const rootReducer = combineReducers({
  crypto: cryptoDataReducer,
});

export const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunk))
);
