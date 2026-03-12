export default function Dashboard() {
  return (
    <div className="space-y-6 text-white">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-white/70 mt-2">
          Protected route ✅ (No backend call, so no 500 error)
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold">Quick Stats</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-sm text-white/70">Status</p>
            <p className="mt-1 font-semibold">Authenticated</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-sm text-white/70">Session</p>
            <p className="mt-1 font-semibold">Active</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-sm text-white/70">Access</p>
            <p className="mt-1 font-semibold">Protected Pages</p>
          </div>
        </div>
      </div>
    </div>
  );
}