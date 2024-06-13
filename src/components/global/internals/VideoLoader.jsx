import React from "react";
import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {string} props.video
 *
 * @export
 * @class VideoLoader
 * @extends {React.Component}
 */
export class VideoLoader extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.video !== prevProps.video) {
      this.videoRef.src = this.props.video;
    }
  }

  render() {
    return (
      <video
        className="body-overlay"
        muted
        autoPlay
        loop
        style={{ opacity: 0.1 }}
        ref={(ref) => (this.videoRef = ref)}
      >
        <source src={this.props.video} type="video/mp4" />
      </video>
    );
  }
}

VideoLoader.propTypes = {
  video: PropTypes.string,
};

export default VideoLoader;
