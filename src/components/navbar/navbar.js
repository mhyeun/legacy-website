import React, { useState, useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./navbar.css";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export function Navbar(props) {
  const { getDarkMode } = props;
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    const change = isDarkMode ? false : true;
    setIsDarkMode(change);
    getDarkMode(change);
  };

  return (
    <div className="container topBotomBordersOut">
      <ul
        id="navbar"
        style={{
          backgroundColor: isDarkMode ? "#303841" : "#ececec",
          borderBottom: isDarkMode ? "2px solid #00adb5" : "2px solid #800020",
        }}
      >
        <li id="namenav">
          <a href="#home" style={{ color: isDarkMode ? "#eeeeee" : "black" }}>
            Matthew Hyeun
          </a>
        </li>
        <div style={{ float: "right", marginRight: "2vw" }}>
          <FormControlLabel
            labelPlacement="start"
            label={<Emoji label="sheep" symbol="🌙" />}
            control={
              <Switch
                style={{ color: "#800020" }}
                checked={isDarkMode}
                onChange={handleToggle}
              />
            }
          />
        </div>
      </ul>
    </div>
  );
}
