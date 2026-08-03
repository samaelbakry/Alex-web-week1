import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextWrapper } from "../../context/AuthContext";

export default function ProtectedAuthRoutes({ children }) {
  const { isAuthenticated } = useContext(AuthContextWrapper);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
}
