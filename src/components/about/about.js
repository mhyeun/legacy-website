import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./about.css";

export class About extends Component {
  render() {
    const { isDarkMode } = this.props;
    return (
      <div id="about">
        <div id="about-me">
          <Fade bottom delay={1000}></Fade>
          <Fade bottom delay={1000}>
            <p id="title" style={{ textAlign: "center", color: isDarkMode ? "#00adb5" : "#800020" }}>
              A little bit about myself.
            </p>
            <p style={{ color: isDarkMode ? "white" : "black" }}>
              I am interested in gaining more experience with fullstack
              development. I enjoy creating intuitive and elegant UI, while also
              working on the logic that goes on behind the scenes. In my free
              time, I enjoy studying history, geography, politics, and
              sociology.
            </p>
          </Fade>
          <Fade bottom delay={1000}>
            <p style={{ color: isDarkMode ? "white" : "black" }}>
              I am currently seeking opportunities for fullstack developer co-op
              positions for the upcoming Fall term.
            </p>
          </Fade>
          <br />
        </div>
      </div>
    );
  }
}
