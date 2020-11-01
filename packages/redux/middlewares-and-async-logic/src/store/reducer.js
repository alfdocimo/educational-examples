import { Types } from "./actions";

const initialState = {
  users: [],
  status: "not started",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_USERS_SUCCESSFUL:
      return {
        users: action.payload.users,
        status: action.payload.status,
      };
    case Types.FETCH_USERS_ERROR:
      return {
        ...state,
        status: action.payload.status,
      };
    case Types.FETCH_USERS_STARTED:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
