import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>MyPortfolio</h2>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <button onClick={toggleTheme}>Toggle</button>
    </nav>
  );
};

export default Navbar;