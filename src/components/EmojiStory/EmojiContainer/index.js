import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";
import OrientationOverlay from "../../OrientationOverlay/index";

class EmojiContainer extends Component {
  isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  render() {
    return (
      <Fragment>
        {this.isMobileDevice() ? <OrientationOverlay /> : null}

        <div className={"container emoji-container"}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

EmojiContainer.propTypes = {
  appTitle: PropTypes.string,
  children: PropTypes.any
};

export default EmojiContainer;
