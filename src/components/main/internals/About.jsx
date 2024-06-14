import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function About() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user"></i> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              The tale behind every <span>great 
              <br />
              developer</span> starts even better.
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            It has been over ten years since I began my career as a UI designer.
            I&apos;ve created a few designs, mostly for dental and skin care items.
            and they saw potential in me at the time, offering me the chance to
            work as a web developer, making desktop database management,
            mock-ups, and applications. Since then, I&apos;ve become obsessed with
            development, and in an effort to quench my curiosity, I&apos;ve tried my
            hand at everything from making advertisements to building and
            managing a completely functional application.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
