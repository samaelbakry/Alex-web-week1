import { useState } from "react";
import { AuthContextWrapper } from "./AuthContext";

export default function AuthProvider({ children }) {
  const storageToken = localStorage.getItem("token");
  const [token, setToken] = useState(storageToken || undefined);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  const isAuthenticated = token

   const login = (tk , user) => {
    setToken(tk);
    setUser(user)
    localStorage.setItem("token", JSON.stringify(tk));
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setToken(undefined);
    setUser(null)
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

 return (
    <AuthContextWrapper.Provider
      value={{ isAuthenticated, login , logout , user  }}
    >
      {children}
    </AuthContextWrapper.Provider>
  );
}
