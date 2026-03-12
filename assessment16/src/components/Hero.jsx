import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">

      {/* background glow */}
      <div className="absolute -top-20 -right-20 h-72 w-72 bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Welcome back 👋
        </h2>

        <p className="mt-3 text-slate-300 max-w-xl">
          This is your modern SaaS-style dashboard. Clean layout, centered content, and professional design.
        </p>

        <div className="mt-6 flex gap-3">
          <button className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold">
            Create Report
          </button>

          <button className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold">
            View Analytics
          </button>
        </div>
      </div>
    </section>
  );
}