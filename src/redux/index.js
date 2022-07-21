import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cryptoDataReducer } from "./reducers/cryptoDataReducer";
import { walletDataReducer } from "./reducers/walletReducer";

const rootReducer = combineReducers({
  crypto: cryptoDataReducer,
  wallet: walletDataReducer,
});

export const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunk))
);
