import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") || false
  );

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
