import React from "react";
import Fade from "react-reveal/Fade";

import githubLogo from "./../../images/github.svg";
import linkedInLogo from "./../../images/linkedin.svg";
import emailLogo from "./../../images/mail.svg";
import resumeLogo from "./../../images/resume.svg";
import resume from "../../documents/Resume.pdf";

const Links = () => {
  return (
    <div id="logos-list">
      <ul id="logos">
        <div className="tooltip">
          <li>
            <a
              href="https://github.com/mhyeun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fade delay={1000}>
                <img className="logo" src={githubLogo} alt="GitHub Logo" />
              </Fade>
            </a>
          </li>
        </div>
        <div className="tooltip">
          <li>
            <a
              href="https://www.linkedin.com/in/matthew-hyeun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fade delay={1500}>
                <img className="logo" src={linkedInLogo} alt="LinkedIn Logo" />
              </Fade>
            </a>
          </li>
        </div>
        <div className="tooltip">
          <li>
            <a href="mailto:jhyeun@edu.uwaterloo.ca">
              <Fade delay={2000}>
                <img className="logo" src={emailLogo} alt="Email Logo" />
              </Fade>
            </a>
          </li>
        </div>
        <div className="tooltip">
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <Fade delay={2500}>
                <img className="logo" src={resumeLogo} alt="Resume Logo" />
              </Fade>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Links;
