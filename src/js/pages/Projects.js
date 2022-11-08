import Project from "../components/Project";

const Projects = (params) => {
  return (
    <>
      <div className="main-section__heading">
        <h2>Projects</h2>
        <p>A selection of projects that I have worked on</p>
      </div>
      <div className="main-section__context">
        <Project />
      </div>
    </>
  );
};

export default Projects;
