import "./styles.css";

import { createStore } from "redux";

import balanceReducer from "./balanceReducer";

import { addMoney, withdrawMoney } from "./balanceActions";

const store = createStore(balanceReducer);

const valueEl = document.getElementById("value");

function render() {
  valueEl.innerHTML = store.getState();
}

render();
store.subscribe(render);

document.getElementById("increment").addEventListener("click", function () {
  store.dispatch(addMoney(100));
});

document.getElementById("decrement").addEventListener("click", function () {
  store.dispatch(withdrawMoney(50));
});
