import React from "react";

export default function Loader({ label = "Loading..." }) {
  return (
    <div className="p-6 text-white">
      <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <div className="h-4 w-4 rounded-full bg-brand-400 animate-pulse" />
        <span className="text-white/80">{label}</span>
      </div>
    </div>
  );
}