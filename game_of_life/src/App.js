import React from "react";
import GridContainer from "./components/GridContainer.js";
import RulesContainer from "./components/RulesContainer.js";
import Title from "./components/Title";
import About from "./components/About.js";

function App() {
  return (
    <div className="app_container">
      <Title />
      <div className="mid_section_container">
        <GridContainer />
        <RulesContainer />
      </div>
      <About />
    </div>
  );
}

export default App;
