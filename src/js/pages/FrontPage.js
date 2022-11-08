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
          <a href="/about">about me,</a>you can see the
          <a href="/projects">projects</a>I worked on recently or
          <a href="/contact">contact me</a>.
        </p>
      </div>
    </>
  );
};

export default FrontPage;
