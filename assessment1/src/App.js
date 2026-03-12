import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  // Typing animation
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 100);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Aryan.dev</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Hello, I'm Aryan 👋</h1>
        <h2 className="typing">{text}</h2>
        <div className="social-buttons">
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I build secure and scalable web applications using React,
          ASP.NET Core, and SQL Server. Passionate about clean UI and performance.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skill">
          <p>React</p>
          <div className="progress"><span style={{width:"90%"}}></span></div>
        </div>

        <div className="skill">
          <p>.NET Core</p>
          <div className="progress"><span style={{width:"85%"}}></span></div>
        </div>

        <div className="skill">
          <p>SQL Server</p>
          <div className="progress"><span style={{width:"88%"}}></span></div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Mess Management System</h3>
            <p>SQL-based mess billing and management system.</p>
          </div>

          <div className="project-card">
            <h3>JWT Auth API</h3>
            <p>Secure API with role-based authentication.</p>
          </div>

          <div className="project-card">
            <h3>EF Core CRUD</h3>
            <p>Full MVC CRUD with validation and SQL Server.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        © 2026 Aryan Patel | Built with React 🚀
      </footer>
    </div>
  );
}

export default App;