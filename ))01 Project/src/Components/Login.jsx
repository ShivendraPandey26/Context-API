import React, { useContext, useState } from "react";
import { useUserId } from "../Context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  // Get the user context and the function to update it
  const { setUser } = useUserId();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the user context with the new user data
    setUser({ userName, passWord });

    // Reset input fields
    setUserName("");
    setPassWord("");
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <input
        type="password"
        placeholder="password"
        value={passWord}
        onChange={(e) => setPassWord(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
