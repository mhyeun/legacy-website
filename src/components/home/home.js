import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./home.css";
import me from "./../../images/me.jpg";

import { Links } from "./../links/links";

export class Home extends Component {
  render() {
    const { isDarkMode } = this.props;
    return (
      <div id="home">
        <div id="intro">
          <Fade delay={1750}>
            <img id="me" width="300px" src={me} alt="Me" style={{border: isDarkMode ? "4px solid #00adb5" : "4px solid #800020"}} />
          </Fade>
          <Fade left>
            <h1 id="name" style={{color: isDarkMode ? "#00adb5" : "#800020"}}>Matthew Hyeun</h1>
          </Fade>
          <Fade right>
            <p style={{color: isDarkMode ? "white" : "black"}}>2B Mechatronics Engineering Student at UWaterloo </p>
          </Fade>
          <Links />
        </div>
      </div>
    );
  }
}
