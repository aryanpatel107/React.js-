import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CardGrid from "./components/CardGrid.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#111827] text-white flex flex-col">
      
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-10 space-y-10">
          <Hero />
          <CardGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}