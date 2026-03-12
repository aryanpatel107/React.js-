import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold tracking-tight">
          Assessment<span className="text-indigo-400">16</span>
        </h1>

        <div className="flex items-center gap-4">
          <input
            placeholder="Search..."
            className="hidden sm:block px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
          <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center font-semibold">
            A
          </div>
        </div>

      </div>
    </header>
  );
}