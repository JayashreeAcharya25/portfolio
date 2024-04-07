import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./index.scss";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import portfolio_1 from "../../assets/portfolio-1.png";

export default function Work() {
  return (
    <>
      <div className="home-work">
        <div className="container">
          <div className="work-container row">
            <div className="col-md-7">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="swiper-card"
              >
                <SwiperSlide>
                  <div className="card-container">
                    <div className="card-section">
                      <img className="img-fluid" src={portfolio_1} alt="" />
                      <div className="text-container">
                        <h4>Cafe Drove</h4>
                        <p>Where Coffee and Community Meet in a Cup.</p>
                        <a className="btn" href="/cafe-drove">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-md-5">
              <div className="text-container">
                <h2 className="mb-4">
                  My <span className="text-highlight">Work</span>
                </h2>
                <p>
                  Delve into a handpicked showcase of my recent projects,
                  illustrating my skillset in web development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
