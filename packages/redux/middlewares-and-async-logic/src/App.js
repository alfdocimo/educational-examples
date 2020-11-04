import React from "react";
import UserSearch from "./components/UserFetch";
import { Provider } from "react-redux";
import store from "./store/store";

import "./styles.css";

/**
 * Defines our main component with a Redux-Provider component at root level
 * The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
 *
 * Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.
 *
 * Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
 */

export default function App() {
  return (
    <Provider store={store}>
      <UserSearch />
    </Provider>
  );
}
