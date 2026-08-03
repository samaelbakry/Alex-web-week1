import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextWrapper } from "../../context/AuthContext";

export default function ProtectedMainRoutes({ children }) {
  const { isAuthenticated } = useContext(AuthContextWrapper);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      // <Navigate to="login" replace />
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
}
