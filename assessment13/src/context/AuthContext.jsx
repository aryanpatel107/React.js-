// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = ({ username, email, password }) => {
    // Dummy authentication: password must be 1234
    if (username && email && password === "1234") {
      setUser({ username, email });
      return true;
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}