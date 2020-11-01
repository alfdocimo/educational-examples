import { Types } from "./balanceActions";

export default function balanceReducer(state = 5000, action) {
  switch (action.type) {
    case Types.WITHDRAW_MONEY:
      return state - action.payload;
    case Types.ADD_MONEY:
      return state + action.payload;

    // If asked for something not related to banking like making a hot dod
    default:
      return state;
  }
}
