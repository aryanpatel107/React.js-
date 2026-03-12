import React from "react";

const Home = () => {
  return (
    <section id="home" className="section">
      <h1>Hello, I'm Aryan 👋</h1>
      <p>Frontend & .NET Developer</p>
      <button onClick={() => alert("Welcome to my portfolio!")}>
        Hire Me
      </button>
    </section>
  );
};

export default Home;