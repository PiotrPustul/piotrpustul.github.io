import * as React from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

const App = () => {
  return (
    <div className="container-lg">
      <Header />
      <section className="sections">
        <Sidebar />
        <MainSection />
      </section>
    </div>
  );
};

export default App;
