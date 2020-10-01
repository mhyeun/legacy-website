import React from "react";
import Home from "./components/home/home";
import About from "./components/about/about";
import "./app.css";

const App = () => {
  return (
    <div>
      <div id="main">
        <Home />
        <About />
      </div>
    </div>
  );
};

export default App;
