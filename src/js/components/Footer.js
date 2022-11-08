import React from "react";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <section id="footer">
      <FooterIcons />
      <div className="copywrite">
        <p>Piotr Pustuł &copy; London 2022</p>
      </div>
    </section>
  );
};

export default Footer;
