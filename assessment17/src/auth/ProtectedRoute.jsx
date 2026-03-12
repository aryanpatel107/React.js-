import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { isTokenExpired } from "./token";
import Loading from "../components/Loading";

export default function ProtectedRoute() {
  const { token, isAuthed, booting } = useAuth();
  const location = useLocation();

  if (booting) return <Loading />;

  if (!token || !isAuthed || isTokenExpired(token)) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}