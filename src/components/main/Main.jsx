import { SideBar } from "../global/internals";

import {
  About,
  ClientLogos,
  Contact,
  HeroSection,
  Hobbies,
  Portfolio,
  // Pricing,
  Resume,
  Service,
  Skills,
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
          <Hobbies />
          <ClientLogos />
          {/* <Pricing /> */}
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Main;
