import React from "react";

export default function User({ name, username, phone }) {
  return (
    <div>
      👉 name: {name}, username: {username}, phone: {phone}
    </div>
  );
}
