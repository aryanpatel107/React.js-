import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function AppShell() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const navClass = ({ isActive }) =>
    `rounded-xl px-3 py-2 text-sm transition ${
      isActive
        ? "bg-white/15 text-white"
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="min-h-screen text-white bg-slate-950">
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="font-semibold tracking-tight">
            Assessment<span className="text-white/70">17</span>
          </Link>

          <nav className="flex items-center gap-2">
            <NavLink to="/dashboard" className={navClass}>
              Dashboard
            </NavLink>
            <NavLink to="/profile" className={navClass}>
              Profile
            </NavLink>
            <button
              onClick={() => {
                logout();
                navigate("/login", { replace: true });
              }}
              className="ml-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}