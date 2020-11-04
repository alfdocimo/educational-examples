import { createStore, applyMiddleware } from "redux";
import logger from "../middlewares/logger";
import thunkMiddleware from "redux-thunk";

// We import the devtools extension to be able to time-travel and debug better
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...[thunkMiddleware, logger]))
);

export default store;
