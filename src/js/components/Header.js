import React from "react";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header id="header">
      <div className="header-container">
        <h1 className="index-link">
          <a href="/">Piotr Pustuł</a>
        </h1>
        <Navigation />
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
