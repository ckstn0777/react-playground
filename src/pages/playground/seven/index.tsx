import { useState } from "react";
import { UserProvider, useUserContext } from "./context";
import React from "react";

const PostComponent = React.memo(_PostComponent);

function _PostComponent() {
  console.log("PostComponent render");

  return (
    <div>
      <h2>PostComponent</h2>
      <UserComponent />
    </div>
  );
}

// const UserComponent = React.memo(_UserComponent);

function UserComponent() {
  console.log("UserComponent render");
  const { state: user, actions } = useUserContext();

  return (
    <div>
      <h2>user id : {user.id}</h2>
      <h2>user nickname : {user.nickname}</h2>

      <button onClick={() => actions.change("id", "ckstn0778")}>
        change userId
      </button>
    </div>
  );
}

export default function Playground() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <PostComponent />
      </UserProvider>

      <button onClick={() => setCount(count + 1)}>count : {count}</button>
    </>
  );
}
