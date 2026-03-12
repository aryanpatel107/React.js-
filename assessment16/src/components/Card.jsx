import React from "react";

export default function Card({ title, value }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl hover:shadow-2xl transition">

      <div className="absolute -top-16 -right-16 h-48 w-48 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="relative">
        <p className="text-xs text-slate-400 uppercase tracking-wider">
          {title}
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          {value}
        </h3>

        <p className="mt-2 text-xs text-slate-400">
          Compared to last month
        </p>
      </div>
    </div>
  );
}