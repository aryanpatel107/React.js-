import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">
        <ProjectCard
          title="Mess Management System"
          description="Full stack application using .NET and SQL."
        />
        <ProjectCard
          title="JWT Authentication System"
          description="Role-based authentication system using .NET Core."
        />
      </div>
    </section>
  );
};

export default Projects;