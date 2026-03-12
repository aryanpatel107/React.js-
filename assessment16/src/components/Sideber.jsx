import React from "react";

export default function Sidebar() {
  return (
    <div style={{ width: 260, padding: 16, background: "#111827", color: "white" }}>
      <h2 style={{ fontWeight: 800 }}>Assessment16</h2>
      <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
        <button style={btn}>Dashboard</button>
        <button style={btn}>Users</button>
        <button style={btn}>Settings</button>
      </div>
    </div>
  );
}

const btn = {
  textAlign: "left",
  padding: "10px 12px",
  borderRadius: 10,
  background: "#1f2937",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "white",
  cursor: "pointer",
};