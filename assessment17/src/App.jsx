import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  NavLink,
} from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./App.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TOKEN_KEY = "assessment17_token";

/* ================= AUTH ================= */

function generateToken(email) {
  const payload = { email, exp: Date.now() + 3600000 };
  return btoa(JSON.stringify(payload));
}

function readToken() {
  const t = localStorage.getItem(TOKEN_KEY);
  if (!t) return null;
  try {
    return JSON.parse(atob(t));
  } catch {
    return null;
  }
}

function isAuthed() {
  const token = readToken();
  return token && token.exp > Date.now();
}

function login(email, password) {
  if (email === "admin@gmail.com" && password === "123456") {
    localStorage.setItem(TOKEN_KEY, generateToken(email));
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

/* ================= PROTECTED ================= */

function Protected({ children }) {
  const location = useLocation();
  return isAuthed() ? children : <Navigate to="/login" replace state={{ from: location }} />;
}

/* ================= LOGIN ================= */

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="card glass">
        <h2>Admin Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

/* ================= LAYOUT ================= */

function Layout({ children }) {
  const navigate = useNavigate();
  const user = readToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="dashboard-layout">
      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div>
          <h2 className="logo">A17</h2>
          <ul>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/analytics">Analytics</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
          </ul>
        </div>

        <button
          className="logout-btn"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
            ☰
          </button>
          <span>Welcome, {user?.email}</span>
        </div>
        {children}
      </main>
    </div>
  );
}

/* ================= PAGES ================= */

function Dashboard() {
  return (
    <Layout>
      <h2>Dashboard</h2>
      <div className="cards">
        <div className="stat">Users <p>1,204</p></div>
        <div className="stat">Revenue <p>$8,450</p></div>
        <div className="stat">Orders <p>320</p></div>
        <div className="stat">Growth <p>+18%</p></div>
      </div>
    </Layout>
  );
}

function Analytics() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 2500, 2200, 3200],
        backgroundColor: "#6366f1",
      },
    ],
  };

  return (
    <Layout>
      <h2>Analytics</h2>
      <div className="chart-container">
        <Bar data={data} />
      </div>
    </Layout>
  );
}

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Krish", email: "krish@mail.com" },
    { id: 2, name: "Yash", email: "yash@mail.com" },
  ]);

  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [editing, setEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    if (editing) {
      setUsers(users.map(u => (u.id === form.id ? form : u)));
      setEditing(false);
    } else {
      setUsers([...users, { ...form, id: Date.now() }]);
    }

    setForm({ id: null, name: "", email: "" });
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <Layout>
      <h2>Users Management</h2>

      <div className="card form-card">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <button type="submit">{editing ? "Update" : "Add"}</button>
        </form>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button className="small-btn edit-btn" onClick={() => handleEdit(u)}>Edit</button>
                <button className="small-btn delete-btn" onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

function Settings() {
  return (
    <Layout>
      <h2>Settings</h2>
      <div className="card">
        <p>Profile Settings</p>
        <p>Password Settings</p>
        <p>Theme Settings</p>
      </div>
    </Layout>
  );
}

/* ================= ROUTES ================= */

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
      <Route path="/analytics" element={<Protected><Analytics /></Protected>} />
      <Route path="/users" element={<Protected><Users /></Protected>} />
      <Route path="/settings" element={<Protected><Settings /></Protected>} />
    </Routes>
  );
}