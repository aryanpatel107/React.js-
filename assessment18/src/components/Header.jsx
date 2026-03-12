import { useAuth } from "../context/AuthContext";

export default function Header({ toggleSidebar }) {
  const { user, logout } = useAuth();

  return (
    <header
      style={{
        background: "var(--card)",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <button onClick={toggleSidebar}>☰</button>

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* Notification */}
        <div style={{ fontSize: 20 }}>🔔</div>

        {/* Avatar */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 35,
              height: 35,
              borderRadius: "50%",
              background: "#6366f1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {user?.name?.charAt(0)}
          </div>

          <span>{user?.name}</span>
        </div>

        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
}