import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav id="navigation" className={props.class}>
      <ul>
        <li className="front-page-link">
          <NavLink to="/piotrpustul">Piotr Pustul</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
