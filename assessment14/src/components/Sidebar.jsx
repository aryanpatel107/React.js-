import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Dashboard</h2>
      <nav>
        <NavLink to="/dashboard/overview" className={({ isActive }) => isActive ? "active" : ""}>Overview</NavLink>
        <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? "active" : ""}>Users</NavLink>
        <NavLink to="/dashboard/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
      </nav>
    </div>
  );
}