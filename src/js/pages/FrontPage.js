import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <>
      <div className="main-section__heading">
        <h2>Welcome</h2>
        <p>
          A beatiful, responsive, statically-generated, react application
          written with modern Javascript.
        </p>
      </div>
      <div className="main-section__context">
        <p>
          Welcome to my website. Please feel free to read more
          <Link to="/about">about me,</Link>you can see the
          <Link to="/projects">projects</Link>I worked on recently or
          <Link to="/contact">contact me</Link>.
        </p>
      </div>
    </>
  );
};

export default FrontPage;
