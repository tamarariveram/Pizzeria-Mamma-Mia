import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function ProtectedRoute({ children, redirectTo, requireAuth }) {
  const { token } = useContext(UserContext);

  if (requireAuth && !token) {
    return <Navigate to="/login" />;
  }

  if (!requireAuth && token) {
    return <Navigate to={redirectTo || "/"} />;
  }

  return children;
}

export default ProtectedRoute;