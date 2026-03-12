import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RoleRoute({ allow }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== allow) {
    return <Navigate to="/forbidden" replace />;
  }

  return <Outlet />;
}

export default RoleRoute;