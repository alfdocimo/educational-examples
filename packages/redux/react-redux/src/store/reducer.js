import { Types } from "./actions";

const initialState = {
  count: 7,
};

/**
 * Describes the reducer that will be able to interact with the redux store
 * It will ONLY be able to modify the state in case the the actions is known
 * to the reducer, i.e 'INCREMENT'
 * 
 * 
 * @param {object} state 
 * @param {object} action 
 */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
