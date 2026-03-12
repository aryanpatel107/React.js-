import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar({ open }) {
  const { user } = useAuth();

  return (
    <aside
      style={{
        width: open ? 230 : 70,
        transition: "0.3s",
        background: "var(--sidebar)",
        color: "var(--sidebar-text)",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: 30 }}>⚡</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <Link style={link} to="/dashboard/overview">Overview</Link>

        {user?.role === "user" && (
          <>
            <Link style={link} to="/dashboard/user/profile">Profile</Link>
            <Link style={link} to="/dashboard/user/orders">Orders</Link>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <Link style={link} to="/dashboard/admin/users">Users</Link>
            <Link style={link} to="/dashboard/admin/products">Products</Link>
          </>
        )}
      </nav>
    </aside>
  );
}

const link = {
  color: "inherit",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "6px",
};