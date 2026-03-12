export default function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-sm text-white/80">{label}</span>
      <input
        {...props}
        className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/30"
      />
    </label>
  );
}