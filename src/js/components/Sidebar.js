import React from "react";
import picutre from "../../images/me.jpg";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <section id="intro">
        <a className="picture" href="/">
          <img src={picutre} alt="my icon" />
        </a>
        <h2>Piotr Pustuł</h2>
        <p>
          <a href="mailto:piotrpustul1@gmail.com">piotrpustul1@gmail.com</a>
        </p>
      </section>

      <section id="sidebar-about">
        <h2>About</h2>
        <p>
          Hi, I am Piotr!
          <br></br>A novice Programmer who does not lack enthusiasm. I enjoy
          challenges, solving problems and working in a team. Throughout my
          career, I learned how to work under pressure and how to solve problems
          effectively. I am a fast learner keen to grow and develop my career
          further.
        </p>
      </section>

      <Footer />
    </section>
  );
};

export default Sidebar;
