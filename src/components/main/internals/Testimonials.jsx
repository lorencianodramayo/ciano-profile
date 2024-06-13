import React from "react";
import OwlCaraousel from "react-owl-carousel";
import AOS from "aos";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "aos/dist/aos.css";

function Testimonials() {
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
              <i className="lar la-comment"></i> testimonial
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Trusted by <span>Hundered Clients</span>
            </h1>
          </div>
          <div
            className="testimonial-slider-wrap scroll-animation"
            data-aos="fade-up"
          >
            <OwlCaraousel
              className="owl-carousel testimonial-slider owl-theme"
              smartSpeed="450"
              items="1"
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
                    <div className="right">
                      <h3>Paublo Dybala</h3>
                      <p className="designation">
                        CEO of <span>IBM Global</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    “Drake - A Developer with the creativity, professional and
                    master of code. Much more than what I&apos;m expect. High quality
                    product & flexiable price. Recommended!.”
                  </p>

                  <a href="" className="project-btn">
                    Project
                  </a>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="author d-flex align-items-center">
                    <img
                      src="../assets/images/testimonial-2.jpg"
                      alt="portfolio"
                    />
                    <div className="right">
                      <h3>Christina Morillo</h3>
                      <p className="designation">
                        Product Management of <span>Invision App Inc</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    “Drake was a real pleasure to work with and we look forward
                    to working with him again. He&apos;s definitely the kind of
                    designer that you can trust with any project from A-Z.”
                  </p>

                  <a href="" className="project-btn">
                    Project
                  </a>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="author d-flex align-items-center">
                    <img
                      src="../assets/images/testimonial-3.jpg"
                      alt="portfolio"
                    />
                    <div className="right">
                      <h3>Phil Foden</h3>
                      <p className="designation">
                        Director of <span>Envato LLC</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    “Extremely profressional and fast service!. Drake is a
                    master of code and he also very creative. We done 3 projects
                    with him and certain will continue.”
                  </p>

                  <a href="" className="project-btn">
                    Project
                  </a>
                </div>
              </div>
            </OwlCaraousel>
            <div className="testimonial-footer-nav">
              <div className="testimonial-nav d-flex align-items-center">
                <button className="prev" onClick={handlePrevClick}>
                  <i className="las la-angle-left"></i>
                </button>
                <div id="testimonial-slide-count">
                  <span className="left">1</span> /3
                </div>
                <button className="next" onClick={handleNextClick}>
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

export default Testimonials;
