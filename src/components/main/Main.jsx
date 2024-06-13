import { SideBar } from "../global/internals";

import {
  About,
  ClientLogos,
  Contact,
  HeroSection,
  Portfolio,
  Pricing,
  Resume,
  Service,
  Skills,
  Testimonials,
} from "./internals";

/**
 * <Main />
 *
 * @component
 *
 * @return {React.ReactNode}
 */
function Main() {
  return (
    <div className="ciano-main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <SideBar />

          <HeroSection />
          <About />
          <Resume />
          <Service />
          <Skills />
          <Portfolio />
          <Testimonials />
          <ClientLogos />
          <Pricing />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Main;
