import { connect } from "react-redux";
import { increment } from "../store/actions";
import Counter from "../components/Counter";

/**
 * Maps the redux state from the store to the props that the component
 * (In this case Counter) will receive
 *
 * @param {object} state
 * @param {object} ownProps
 * @return {object}
 */

function mapStateToProps(state, ownProps) {
  return {
    count: state.count,
    hasReachedNumber: state.count >= ownProps.numberToReach ? true : false,
  };
}

/**
 * Maps an usage of the instance of the dispatch function to a prop
 * (in this case onIncrementClick) to a prop that the Counter component
 * will receive
 * @param {function} dispatch
 * @return {object}
 *
 */

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      dispatch(increment());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
