import React, { createContext, useContext, useMemo, useState } from "react";
import { isTokenExpired } from "./token";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("access_token") || "");
  const [user, setUser] = useState(() => {
    const t = localStorage.getItem("access_token");
    if (!t) return null;
    return { email: "admin@gmail.com" };
  });

  const isAuthed = !!token && !isTokenExpired(token);

  function saveToken(t) {
    setToken(t);
    localStorage.setItem("access_token", t);
  }

  function logout() {
    setToken("");
    setUser(null);
    localStorage.removeItem("access_token");
  }

  async function login({ email, password }) {
    // MOCK login - no backend call
    if (email !== "admin@gmail.com" || password !== "123456") {
      throw new Error("Invalid email or password");
    }

    const payload = {
      email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
    };

    const fakeToken = "header." + btoa(JSON.stringify(payload)) + ".signature";
    saveToken(fakeToken);
    setUser({ email });
    return fakeToken;
  }

  const value = useMemo(
    () => ({ token, user, isAuthed, login, logout }),
    [token, user, isAuthed]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}