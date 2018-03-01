import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";
import OrientationOverlay from "../../OrientationOverlay/index";
import { checkDeviceType } from "../../../services/checkDeviceType";

class EmojiContainer extends Component {
  render() {
    const device = checkDeviceType();
    return (
      <Fragment>
        {device === "mobile" ? <OrientationOverlay /> : null}

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
