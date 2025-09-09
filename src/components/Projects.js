import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Проект 1",
      description: "Сайт для поиска игр",
      technologies: ["React", "CSS", "JavaScript", "API"],
      github: "https://github.com/MikhailMonkhorov/GameSearch.git",
      demo: "https://mikhailmonkhorov.github.io/GameSearch/",
    },
    {
      title: "Проект 2",
      description: "Приложение для просмотра погоды",
      technologies: ["HTML", "CSS", "JS", "API"],
      github: "https://github.com/MikhailMonkhorov/pogoda.git",
      demo: "https://mikhailmonkhorov.github.io/pogoda/",
    },
    {
      title: "Проект 3",
      description: "Мой первый тудулист",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MikhailMonkhorov/todolist.git",
      demo: "https://mikhailmonkhorov.github.io/todolist/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Мои проекты</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">
                  GitHub
                </a>
                <a href={project.demo} className="project-link">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
