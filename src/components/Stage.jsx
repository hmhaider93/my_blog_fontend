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
                    getBeforeInit={(instance) => {
                        instance
                            .type("I'm a Full Stack Web Developer.")
                            .pause(750)
                            .delete(24)
                            .pause(500)
                            .type("lutter Developer.")
                            .pause(750)
                            .delete(19)
                            .type("n AI Enthusiast.")
                            .pause(750)
                            .break() // Moves to the next line
                            .type("<span style='font-weight: bold; font-size: 1.5em;'>Oh Lord Make Me Brave, and make my path Easy for me.</span>")
                
                        // Remember to return it!
                        return instance;
                      }}
                  >
                  </TypeIt>
                </h3>
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