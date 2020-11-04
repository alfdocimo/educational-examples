import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInit } from "../store/actions";
import User from "./User";

export default function Actions() {
  const { users, status } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(fetchInit());
  };

  return (
    <div className="flex-center">
      <h1>User Fetcher 🔎</h1>
      <button data-testid="fetch-users-btn" onClick={handleOnClick}>fetch users 👥</button>
      <h3>Search status: {status}</h3>
      {users &&
        users.map(({ name, username, phone }) => (
          <User key={username} username={username} phone={phone} name={name} />
        ))}
    </div>
  );
}
