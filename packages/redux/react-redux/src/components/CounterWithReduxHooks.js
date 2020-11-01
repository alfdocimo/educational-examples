import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/actions";

/**
 * Describes a component which increments on click
 * It makes use of useSelector and useDispatch hooks to
 * communicate with the redux store
 */

export default function CounterWithReduxHooks() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  function handleOnClick(e) {
    e.preventDefault();

    dispatch(increment());
  }

  return (
    <div className="counter-hooks flex-center">
      I'm another counter using redux hooks! and the count is: {count}
      <button onClick={handleOnClick}>➕</button>
    </div>
  );
}
