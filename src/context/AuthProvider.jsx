import { useState } from "react";
import { AuthContextWrapper } from "./AuthContext";

export default function AuthProvider({ children }) {
  const token = localStorage.getItem("token") !== null;
  const [isAuthenticated, setIsAuthenticated] = useState(token);

  return (
    <AuthContextWrapper.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContextWrapper.Provider>
  );
}
