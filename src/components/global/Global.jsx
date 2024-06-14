import React from "react";

import Main from "../main";

import {
  FloatBar,
  // Settings,
  SideBar,
  SideMenu,
  // VideoLoader,
} from "./internals";

import "./css/App.css";
import "./css/responsive.css";

/**
 * <Global />
 *
 * @component
 *
 * @return {React.ReactNode}
 */
function Global() {
  // const [currentVideo, setVideo] = React.useState("");

  // const changeVideo = React.useCallback((videos) => {
  //   setVideo(videos);
  // }, []);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--primary_color", "#e4af12");
  }, []);

  return (
    <>
      {/* Page Loader */}
      {/* <VideoLoader video={currentVideo} /> */}

      {/* Settings icon */}
      {/* <Settings clickEvent={changeVideo} /> */}

      {/* Left Side Bar and it will get executed on large devices*/}
      <SideBar />

      {/*when user interacts with the hamburger menu it display the inner-components*/}
      <SideMenu />

      {/*fixed on large screens easy to navigate through section og main components*/}
      <FloatBar />

      {/*  */}
      <Main />
    </>
  );
}

export default Global;
