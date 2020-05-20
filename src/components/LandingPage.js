import React from "react";
import Fade from "react-reveal/Fade";

function LandingPage(props) {
  return (
    <div>
      <div className="nav-bar">
        <nav>
          <div className="nav-link-container">
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a
              href="https://drive.google.com/file/d/197KWSOGt0g5giLcA5YwtmNw7JxWrHW2Q/view?usp=sharing"
              className="resume"
            >
              Resume
            </a>
            <a href="#blog">Blog</a>
            <a href="#contact">Connect</a>
          </div>
        </nav>
      </div>

      <div className="landing-page">
        <div className="landing-page-title">
          <p>
            <span className="name-intro">Hello, my name is</span>
            <br />
            <span className="name">Zachery Smith</span>.
            <br />I am a{" "}
            <span className="white highlight">Full Stack Web Developer </span>
            <br />
            with a <span className="white">Master's in Cybersecurity</span>.
            <br />
            Former <span className="white">computer science professor</span>,
            <br />
            <span className="white">cybersecurity researcer</span>,
            <br />
            and <span className="white">cryptocurrency data officer</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
