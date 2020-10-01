import React from "react";
import Fade from "react-reveal/Fade";
import "./home.css";
import me from "./../../images/me.jpg";

import Links from "./../links/links";

const Home = () => {
  return (
    <div id="home">
      <div id="intro">
        <Fade delay={1750}>
          <img
            id="me"
            width="300px"
            src={me}
            alt="Me"
            style={{
              border: "4px solid #800020",
            }}
          />
        </Fade>
        <Fade left>
          <h1 id="name">Matthew Hyeun</h1>
        </Fade>
        <Fade right>
          <p>2B Mechatronics Engineering Student at UWaterloo </p>
        </Fade>
        <Links />
      </div>
    </div>
  );
};

export default Home;
