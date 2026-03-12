export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center text-white">
      <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded-full bg-white animate-pulse" />
        <p className="text-sm text-white/80">Loading…</p>
      </div>
    </div>
  );
}