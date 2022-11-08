import React from "react";
import { Routes, Route } from "react-router-dom";

import FrontPage from "../pages/FrontPage";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";

const MainSection = () => {
  return (
    <section id="main-section">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
};

export default MainSection;
