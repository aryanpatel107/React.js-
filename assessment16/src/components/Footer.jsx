import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-400">
        © {new Date().getFullYear()} Assessment16 — Modern Dashboard UI
      </div>
    </footer>
  );
}