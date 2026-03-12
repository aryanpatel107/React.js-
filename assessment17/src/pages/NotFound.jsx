import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <h1 className="text-2xl font-semibold">404</h1>
        <p className="mt-2 text-white/70">Page not found.</p>
        <Link className="inline-block mt-5 rounded-xl bg-white text-black px-4 py-2" to="/dashboard">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}