import React from "react";
import OwlCaraousel from "react-owl-carousel";
import AOS from "aos";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "aos/dist/aos.css";

function Hobbies() {
  const carouselRef = React.useRef(null);

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlePrevClick = React.useCallback(() => {
    carouselRef.current.prev();
  }, []);

  const handleNextClick = React.useCallback(() => {
    carouselRef.current.next();
  }, []);

  return (
    <section
      className="testimonial-area page-section scroll-to-page"
      id="testimonial"
    >
      <div className="custom-container">
        <div className="testimonial-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-gamepad"></i> Hobbies
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              <span>Work-Life</span> Balance
            </h1>
          </div>
          <div
            className="testimonial-slider-wrap scroll-animation"
            data-aos="fade-up"
          >
            <OwlCaraousel
              className="owl-carousel testimonial-slider owl-theme"
              smartSpeed="450"
              items={1}
              dots={false}
              ref={carouselRef}
            >
              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="author d-flex align-items-center">
                    <img
                      src="../assets/images/testimonial-1.jpg"
                      alt="portfolio"
                    />
                  </div>
                  <p>Some hobbies</p>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="author d-flex align-items-center">
                    <img
                      src="../assets/images/testimonial-2.jpg"
                      alt="portfolio"
                    />
                  </div>
                  <p>Some Hobbies</p>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="author d-flex align-items-center">
                    <img
                      src="../assets/images/testimonial-3.jpg"
                      alt="portfolio"
                    />
                  </div>
                  <p>Some Hobbies</p>
                </div>
              </div>
            </OwlCaraousel>
            <div className="testimonial-footer-nav">
              <div className="testimonial-nav d-flex align-items-center">
                <button
                  className="prev"
                  onClick={handlePrevClick}
                  // disabled={page === 1}
                >
                  <i className="las la-angle-left"></i>
                </button>

                <button
                  className="next"
                  onClick={handleNextClick}
                  // disabled={page === 3}
                >
                  <i className="las la-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
