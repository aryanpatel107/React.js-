// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login({ username, email, password });
      setSuccess(true);
      setTimeout(() => navigate("/dashboard"), 1500); // show success message
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="center login-bg">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back!</h2>
        <p className="subtitle">Please login to continue</p>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Login Successful! Redirecting...</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}