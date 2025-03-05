import React from "react";

const UserContext = React.createContext();

export const UserProvider = ({ user, children }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext };  
