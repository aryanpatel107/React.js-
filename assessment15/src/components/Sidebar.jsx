import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "10px",
    marginBottom: "10px",
    textDecoration: "none",
    color: isActive ? "white" : "#cbd5e1",
    background: isActive ? "#2563eb" : "transparent",
    borderRadius: "6px",
  });

  return (
    <aside
      style={{
        width: "220px",
        background: "#1e293b",
        padding: "20px",
        color: "white",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Assessment15</h2>

      <NavLink to="/" end style={linkStyle}>
        Dashboard
      </NavLink>

      <NavLink to="/users" style={linkStyle}>
        Users
      </NavLink>

      <NavLink to="/settings" style={linkStyle}>
        Settings
      </NavLink>
    </aside>
  );
}