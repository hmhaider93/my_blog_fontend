import React from "react";
import "animate.css"; // Ensure you have Animate.css installed
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is installed
import TypeIt from "typeit-react"; // Install TypeIt via npm
import "./Stage.css"; // Custom styles for the header

const StageSection = () => {
  const goto = (url) => {
    window.location.href = url;
  };

  return (
    <header
      id="fh5co-header"
      className="fh5co-cover js-fullheight"
      role="banner"
      style={{ backgroundImage: "url('/images/color.jpg')" }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div
                className="display-tc js-fullheight animate-box"
                data-animate-effect="fadeIn"
              >
                <div
                  className="profile-thumb"
                  style={{
                    background: "url('/images/utkvctr.png')",
                  }}
                ></div>
                <h1>
                  <b>Haider Mushtaq</b>
                </h1>
                <h3 id="pauseResume">
                  <TypeIt
                    options={{
                      speed: 30,
                      startDelay: 700,
                    }}
                  >
                    AI Enthusiast | Flutter and Native Mobile Developer | Fullstack Devloper
                  </TypeIt>
                </h3>
                <p>
                  <ul className="fh5co-social-icons">
                    <li>
                      <a href="https://www.linkedin.com/in/skhiearth/">
                        <i className="icon-linkedin2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/skhiearth">
                        <i className="icon-github"></i>
                      </a>
                    </li>
                  </ul>
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StageSection;