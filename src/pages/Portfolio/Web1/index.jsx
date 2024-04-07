import React from "react";
import "../index.scss";
import Header from "../../../components/Header";
import image from '../../../assets/Cafe-Drove.png'

export default function Web1() {
  return (
    <>
      <Header />
      <div className="development">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-header">
                <h3>Cafe Drove</h3>
                <span className="tagline">
                  Where Coffee and Community Meet in a Cup.
                </span>
              </div>
              <div className="text-container">
                <p>
                  Inside the website, you'll find four main sections: About Us,
                  Services, Testimonials, and Products.
                </p>
                <p>
                  Used React.js for the website and added animations using AOS.
                  It only took one day to put it all together.
                </p>
                <p>Ever wondered how Cafe Drove came to be?&#129300;</p>
                <p>
                  Well, picture this: I was just chillin' online, thinking about
                  tea and coffee &#127861;, when suddenly, BAM! Cafe Drove
                  popped up outta nowhere! I mean, talk about a wild ride!
                </p>
                <p>
                  And here's a little secret: while I'm the brain behind this
                  cozy haven &#128541;, coffee isn't exactly my cup of tea
                  &#128517;
                </p>
                <p>Check this out! <a target="__blank" href="https://cafe-drove.web.app/">Click here</a></p>
              </div>
              <div className="text-container">
                <ul>
                  <li>
                    <p>
                      Framework : <span className="tagline">React.js</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Animation :{" "}
                      <span className="tagline">AOS (Aniamtion On Scroll)</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Font Family :{" "}
                      <span className="tagline">
                        Zilla Slab, Libre Baskerville, Cinzel
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Colors:{" "}
                      <div className="d-flex mt-2 gap-4">
                        {" "}
                        <div className="elements">
                          <p className="circle1 mb-2"></p>
                          <p className="color-code">#ce6d06</p>
                        </div>
                        <div className="elements">
                          <p className="circle2 mb-2"></p>
                          <p className="color-code">#8c6344</p>
                        </div>
                        <div className="elements">
                          <p className="circle3 mb-2"></p>
                          <p className="color-code">#2b2a2a</p>
                        </div>
                        <div className="elements">
                          <p className="circle4 mb-2"></p>
                          <p className="color-code">#807f7f</p>
                        </div>
                      </div>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-container">
                <img className="img-fluid" src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
