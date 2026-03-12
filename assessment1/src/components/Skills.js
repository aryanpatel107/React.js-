import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;