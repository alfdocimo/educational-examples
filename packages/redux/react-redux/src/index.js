import React from "react";
import ReactDOM from "react-dom";
import CounterContainer from "./containers/CounterContainer";
import CounterWithReduxHooks from "./components/CounterWithReduxHooks";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import "./styles.css";

/**
 * Create the main redux store, with a reducer
 */

const store = createStore(reducer);

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
      <CounterContainer numberToReach={15} />
      <CounterWithReduxHooks />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
