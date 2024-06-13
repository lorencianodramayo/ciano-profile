import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function Skills() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes"></i> my skills
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Advantages</span>
            </h1>
          </div>

          <div className="row skills text-center">
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/figma.png" alt="Figma" />
                </div>
                <p className="name">Figma</p>
              </div>
            </div>

            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/framer.png" alt="Framer" />
                </div>
                <p className="name">Framer</p>
              </div>
            </div>

            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/react.png" alt="React" />
                </div>
                <p className="name">React</p>
              </div>
            </div>

            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/wordpress.png" alt="WordPress" />
                </div>
                <p className="name">WordPress</p>
              </div>
            </div>

            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/laravel.png" alt="Laravel/PHP" />
                </div>
                <p className="name">Laravel/PHP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
