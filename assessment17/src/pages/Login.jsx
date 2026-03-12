import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const from = location.state?.from || "/dashboard";

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await login({ email, password }); // uses mock login from AuthContext
      navigate(from, { replace: true });
    } catch (err) {
      setError(err?.message || "Login failed");
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="mt-1 text-sm text-white/70">Login to continue</p>

        {error && (
          <div className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full rounded-xl bg-white text-black py-3 font-medium">
            Login
          </button>
        </form>

        <p className="mt-4 text-xs text-white/60">
          Demo creds: <span className="text-white/80">admin@gmail.com / 123456</span>
        </p>
      </div>
    </div>
  );
}