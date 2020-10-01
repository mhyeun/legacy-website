import React from "react";
import Fade from "react-reveal/Fade";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div id="about-me">
        <Fade bottom delay={1000}></Fade>
        <Fade bottom delay={1000}>
          <p
            id="title"
            style={{
              textAlign: "center",
            }}
          >
            A little bit about myself.
          </p>
          <p>
            Fullstack developer with experience working with
            JavaScript/TypeScript and its tools: React, Node, and Express.
            Familiar with MongoDB and PostgreSQL databases. I enjoy creating
            intuitive and elegant UI, while also working on the logic that goes
            on behind the scenes. In my free time, I enjoy studying history,
            geography, and politics.
          </p>
        </Fade>
        <Fade bottom delay={1000}>
          <p>
            Previous experiences include Automation Developer at Ford, and
            Software Developer at Tjene Corp. Currently working at Setter Inc.
            as a Software Engineering Intern!
          </p>
        </Fade>
        <br />
      </div>
    </div>
  );
};

export default About;
