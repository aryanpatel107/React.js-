// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="welcome-banner">
        <h1>Welcome, {user?.username}!</h1>
        <p>Your email: {user?.email}</p>
      </div>
      <div className="dashboard-nav">
        <Link to="/profile" className="btn">Profile</Link>
        <button onClick={logout} className="btn btn-logout">Logout</button>
      </div>
    </div>
  );
}