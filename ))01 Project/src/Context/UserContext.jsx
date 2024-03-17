// UserContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // Define state for user
  const [user, setUser] = useState(null);

  return (
    // Provide the state and setter function through the context
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user context
export const useUserId = () => useContext(UserContext);
