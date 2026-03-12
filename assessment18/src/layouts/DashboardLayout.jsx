import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

export default function DashboardLayout() {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar open={open} setOpen={setOpen} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header toggleSidebar={() => setOpen(!open)} />

        <main style={{ padding: "30px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}