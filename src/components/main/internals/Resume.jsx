import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function Resume() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> Resume
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Education & <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2020 - Present</span>

              <h2>Senior Frontend Developer</h2>
              <p>Eclaro</p>

              <h2>Interim Product Manager</h2>
              <p>Ad-Lib.io</p>

              <h2>Creative Developer</h2>
              <p>Ad-Lib.io</p>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2014 - 2020</span>
              <h2>Creative Developer</h2>
              <p>Sizmek by Amazon</p>

              <h2>Applications Developer</h2>
              <p>Funai Corporation</p>

              <h2>Web Developer</h2>
              <p>Customer Benefit Services Inc</p>
            </div>

            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">Freelance</span>
              <h2>Full-Stack Developer</h2>
              <p>Smartly Video &amp; Display</p>

              <h2>Wordpress Developer</h2>
              <p>GoLaunch Services</p>

              <h2>Full-Stack MERN Developer</h2>
              <p>Parktastic PH</p>

              <h2>Full-Stack Developer</h2>
              <p>Martech &amp; Techtube</p>

              <h2>HTML Developer</h2>
              <p>Upwork</p>

              <h2>Wordpress Developer</h2>
              <p>Enkatsu Dojo</p>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2010 - 2014</span>
              <h2>Bachelor Degree of Information Technology</h2>
              <p>University of Cebu Lapu-Lapu and Mandaue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
