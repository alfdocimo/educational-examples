import axios from "axios";

const Types = {
  FETCH_USERS_STARTED: "FETCH_USERS_STARTED",
  FETCH_USERS_SUCCESSFUL: "FETCH_USERS_SUCCESSFUL",
  FETCH_USERS_ERROR: "FETCH_USERS_ERROR",
};

const fetchUsersSuccessful = (users) => ({
  type: Types.FETCH_USERS_SUCCESSFUL,
  payload: {
    users,
    status: "successful ✅",
  },
});

const fetchUsersError = () => ({
  type: Types.FETCH_USERS_ERROR,
  payload: {
    status: "error ❌",
  },
});

const fetchUsersStarted = () => ({
  type: Types.FETCH_USERS_STARTED,
  payload: {
    status: "loading... ⌛",
  },
});

const fetchUsersInit = () => {
  return async function (dispatch) {
    dispatch(fetchUsersStarted());

    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const { data } = response;
        dispatch(fetchUsersSuccessful(data));
      })
      .catch(() => {
        dispatch(fetchUsersError());
      });
  };
};

export { fetchUsersInit as fetchInit, Types };
