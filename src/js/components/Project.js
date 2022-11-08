import React, { useState, useEffect } from "react";

import projectsDb from "../../data/ProjectsData";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsDb);
  }, [projects]);

  return (
    <>
      {projects &&
        projects.map((project) => (
          <div className="main-section__project" key={project.id}>
            <header>
              <a href={project.link}>
                <h3>{project.name}</h3>
              </a>
              <time className="worked-since">{project.workedSince}</time>
            </header>
            <a href={project.link} className="main-section__project-image">
              <img src={project.imgSrc} alt={project.imgAlt} />
            </a>
            <div className="description">
              <h4>
                Provision of services for
                <a href="https://www.3bweb.com/">
                  <span>3B Digital</span>
                </a>
              </h4>
              {project.description}
            </div>
          </div>
        ))}
    </>
  );
};

export default Project;
