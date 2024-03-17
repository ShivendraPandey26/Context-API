import React from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
