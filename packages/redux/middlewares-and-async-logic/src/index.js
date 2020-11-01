import React from "react";
import ReactDOM from "react-dom";
import UserSearch from "./components/UserFetch";
import logger from "./middlewares/logger";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// We import the devtools extension to be able to time-travel and debug better
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./store/reducer";
import "./styles.css";

/**
 * Create the main redux store, with a reducer
 * And add every middleware we plan on using
 */

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...[thunkMiddleware, logger]))
);

/**
 * Defines our main component with a Redux-Provider component at root level
 * The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
 *
 * Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.
 *
 * Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
 */

function App() {
  return (
    <Provider store={store}>
      <UserSearch />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
