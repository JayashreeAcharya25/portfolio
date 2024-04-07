import React from "react";
import "./index.scss";

export default function Career() {
  return (
    <>
      <div className="home-career">
        <div className="container">
          <div className="career-container row">
            <div className="col-md-7">
              <div className="text-container">
                <h2 className="mb-4">My Career <span className="text-highlight">So Far</span></h2>
       
                <p>
                  Proficient in developing web applications using technologies
                  such as React.js, Angular.js, with a focus
                  on building seamless user experiences and implementing
                  authentication protocols using Node.js, Express.js and Django. 
                </p>
                <p>Experienced in collaborating with
                  multidisciplinary teams and contributing to various aspects of
                  project development, from frontend design to backend logic</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="elements">
                <div className="d-flex gap-md-4">
                    <p>Javascript</p>
                    <p>Python</p>
                </div>
                <div className="d-flex gap-md-4 mt-4">
                    <p>React.js</p>
                    <p>Angular.js</p>
                    <p>Node.js</p>
                </div>
                <div className="d-flex gap-md-4 mt-4">
                    <p>Django</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
