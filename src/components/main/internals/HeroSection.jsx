import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
              data-aos="fade-up"
            >
              <i className="las la-home"></i> Introduction
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Hey! I&apos;m <span>Ciano</span>,
              <br /> a Full-Stack Developer
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            I build and perfect elegantly simple solutions, from front-end to
            back-end. I love what I do. It&apos;s just that simple!
          </p>
          <a
            href="#portfolio"
            className="go-to-project-btn scroll-to scroll-animation"
            data-aos="fade-up"
          >
            <img src="../assets/images/round-text.png" alt="Rounded Text" />
            <i className="las la-arrow-down"></i>
          </a>
          <div className="facts d-flex">
            <div className="left scroll-animation" data-aos="fade-right">
              <h1>9+</h1>
              <p>
                Years of Frontend <br />
                Experience
              </p>
            </div>

            <div className="scroll-animation" data-aos="zoom-in">
              <h1>3+</h1>
              <p>
                Years of Backend <br />
                Experience
              </p>
            </div>

            <div className="right scroll-animation" data-aos="fade-left">
              <h1>2</h1>
              <p>
                Years of Design <br />
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
