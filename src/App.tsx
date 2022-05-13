import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./common/hooks";
import { fetchUser, fetchTurkishUsers } from "./features/userSlice";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.Users);

  const currentUser = user.data && user.data.results[0];

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
      <button onClick={() => dispatch(fetchTurkishUsers())}>
        Fetch Turkish User
      </button>
      {user.loading && "Loading..."}
      {user.error && user.error}
      {currentUser && (
        <div>
          <p>
            Name: {currentUser.name.title} {currentUser.name.first}{" "}
            {currentUser.name.last}
          </p>
          <p>Email: {currentUser.email}</p>
          <p>
            Avatar: <img src={currentUser.picture.large} />
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
