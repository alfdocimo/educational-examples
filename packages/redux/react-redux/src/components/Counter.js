import React from "react";

/**
 *  Describes a component which increments on click
 *  Notice that the `hasReachedNumber` prop is mapped and computed
 *  on the CounterContainer through the use of mapStateToProps,
 *  based on the value of `numberToReach`
 *  @param {object} props
 *  @return {function}
 */

export default function Counter(props) {
  return (
    <div className="counter flex-center">
      <h1> Here's a counter</h1>
      <h2>
        Has it reached {props.numberToReach}?{" "}
        {props.hasReachedNumber.toString()}
      </h2>
      <p>Count:{props.count}</p>
      <button onClick={props.onIncrementClick}>➕</button>
    </div>
  );
}
