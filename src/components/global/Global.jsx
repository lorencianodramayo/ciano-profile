import React from "react";

import { Settings, Sidebar, VideoLoader } from "./internals";

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
  const [currentVideo, setVideo] = React.useState("");

  const changeVideo = React.useCallback((videos) => {
    setVideo(videos);
  }, []);

  return (
    <div>
      {/* Page Loader */}
      <VideoLoader video={currentVideo} />

      {/* Settings icon */}
      <Settings clickEvent={changeVideo} />

      {/* Left Side Bar and it will get executed on large devices*/}
      <Sidebar />
    </div>
  );
}

export default Global;
