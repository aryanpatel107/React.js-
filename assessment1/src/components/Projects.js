import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <ProjectCard
        title="Portfolio Website"
        description="Personal portfolio built using React."
      />

      <ProjectCard
        title="E-Commerce App"
        description="Shopping app with cart functionality."
      />
    </section>
  );
};

export default Projects;