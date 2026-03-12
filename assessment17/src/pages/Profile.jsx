import { useAuth } from "../auth/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="space-y-6 text-white">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Profile</h2>
        <p className="text-white/70 mt-2">
          Protected route ✅ (No backend call, so no 500 error)
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold">User</h3>
        <p className="mt-2 text-white/70">
          Email: <span className="text-white">{user?.email || "admin@gmail.com"}</span>
        </p>
      </div>
    </div>
  );
}