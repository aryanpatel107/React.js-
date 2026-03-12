import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={styles.layout}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Assessment15</h2>

        <NavLink to="/" end style={styles.link}>
          Dashboard
        </NavLink>

        <NavLink to="/users" style={styles.link}>
          Users
        </NavLink>

        <NavLink to="/settings" style={styles.link}>
          Settings
        </NavLink>
      </aside>

      <div style={styles.main}>
        <header style={styles.topbar}>
          <h3>Admin Dashboard</h3>
        </header>

        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
  },
  sidebar: {
    width: "240px",
    background: "#1e293b",
    padding: "25px",
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    marginBottom: "40px",
  },
  link: {
    marginBottom: "15px",
    color: "#cbd5e1",
    textDecoration: "none",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  topbar: {
    padding: "20px",
    background: "white",
    borderBottom: "1px solid #ddd",
  },
  content: {
    flex: 1,
    padding: "30px",
    background: "#f1f5f9",
  },
};