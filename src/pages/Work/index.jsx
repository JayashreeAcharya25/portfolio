import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { Pagination, Autoplay } from "swiper/modules";
import portfolio_1 from "../../assets/portfolio-1.png";
import work_icon from "../../assets/work-icon.svg";

export default function Work() {
  return (
    <>
      <div className="home-work">
        <div className="container">
          <div className="work-container row">
          <div className="col-md-12">
              <div className="text-container">
                <h2 className="mb-4">
                  My <span className="text-highlight">Work</span>
                </h2>
                <p>
                  Delve into a handpicked showcase of my recent projects,
                  illustrating my skillset in web development
                </p>
                {/* <img className="img-fluid" src={work_icon} alt="" /> */}
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-md-5">
              <Swiper
                grabCursor={true}
                slidesPerView={2}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                modules={[ Pagination, Autoplay]}
                className="swiper-card"
              >
                <SwiperSlide>
                  <div className="card-container">
                    <div className="card-section">
                      <img className="img-fluid" src={portfolio_1} alt="" />
                      <div className="text-container">
                        <h4>Cafe Drove</h4>
                        <p>Where Coffee and Community Meet in a Cup.</p>
                        <a className="btn custom-btn" href="/cafe-drove">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-container">
                    <div className="card-section">
                      <img className="img-fluid" src={portfolio_1} alt="" />
                      <div className="text-container">
                        <h4>Cafe Drove</h4>
                        <p>Where Coffee and Community Meet in a Cup.</p>
                        <a className="btn custom-btn" href="/cafe-drove">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
