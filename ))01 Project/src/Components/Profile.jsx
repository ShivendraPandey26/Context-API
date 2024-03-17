import React, { useContext } from "react";
import { useUserId } from "../Context/UserContext";

function Profile() {
  const { user } = useUserId();

  return (
    <>
      <h2>Welcome {user && user.userName}</h2>
    </>
  );
}

export default Profile;
