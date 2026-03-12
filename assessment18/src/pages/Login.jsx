import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [role, setRole] = useState("user");
  const [remember, setRemember] = useState(true);
  const [dark, setDark] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, email, role };
    login(user);

    if (remember) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    }

    navigate("/dashboard");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: dark
          ? "linear-gradient(135deg,#111827,#020617)"
          : "linear-gradient(135deg,#6366f1,#06b6d4)",
        transition: "0.3s",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "380px",
          padding: "40px",
          borderRadius: "14px",
          background: dark ? "#1e293b" : "white",
          color: dark ? "white" : "black",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          Welcome Back 👋
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={input}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {/* Remember Me */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />{" "}
            Remember Me
          </label>
        </div>

        <button style={button}>Login</button>

        {/* Dark Mode Toggle */}
        <button
          type="button"
          onClick={() => setDark(!dark)}
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: dark ? "#facc15" : "#111827",
            color: dark ? "black" : "white",
          }}
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </form>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#6366f1",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};