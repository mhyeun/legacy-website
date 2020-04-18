import React, { useState } from "react";
import { Home } from "./components/home/home";
import { Navbar } from "./components/navbar/navbar";
import { About } from "./components/about/about";
import "./app.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const getDarkMode = (isDark) => {
    setIsDarkMode(isDark);
  };

  return (
    <div>
      <Navbar getDarkMode={getDarkMode} />
      <div
        id="main"
        style={{ backgroundColor: isDarkMode ? "#3a4750" : "white" }}
      >
        <Home isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
