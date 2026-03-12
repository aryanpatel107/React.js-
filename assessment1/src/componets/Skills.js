import React from "react";

const Skills = () => {
  const skills = ["ReactJS", ".NET Core", "SQL", "JavaScript", "HTML", "CSS"];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
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