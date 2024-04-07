import React from "react";
import "./index.scss";

export default function About() {
  return (
    <>
      <div className="home-about" id="about">
        <div className="container">
          <div className="about-container row">
            <div className="col-md-5">
              <div className="text-container">
                <h2>About <span className="text-highlight">Me</span></h2>
                <span className="tagline">Dedicated to crafting sleek and minimalist<br/>designs that speak volumes</span>
              </div>
            </div>
            <div className="col-md-7">
              <p className="mt-4 mt-md-0">
                I'm Jayashree Acharya, a passionate Software Developer based in
                Banglore, India, with 3.5+ years of experience. I specialize in
                full-stack development, UI design, and optimizing web
                functionalities for efficient data retrieval and workflows.
                Explore my portfolio to see how I craft innovative solutions to
                exceed user expectations and bring projects to life.
              </p>
              <a className="btn" href="">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
