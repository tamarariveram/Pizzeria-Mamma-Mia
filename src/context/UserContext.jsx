import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);

  const login = async (emailInput, passwordInput) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInput, password: passwordInput }),
    });
    const data = await response.json();

    if (data.token) {
      setToken(data.token);
      setEmail(emailInput);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", emailInput);
    }
    return data;
  };

  const register = async (emailInput, passwordInput) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInput, password: passwordInput }),
    });
    const data = await response.json();

    if (data.token) {
      setToken(data.token);
      setEmail(emailInput);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", emailInput);
    }

    return data;
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const getProfile = async () => {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
