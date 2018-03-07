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

        <div className={"container emoji-container"}>{this.props.children}</div>
        <div className="attribution">
          <p>
            Emoji artwork is provided by{" "}
            <a href="https://www.emojione.com" rel="noopener noreferrer" target="_blank">
              EmojiOne
            </a>{" "}
            and is licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/legalcode"
              rel="noopener noreferrer"
              target="_blank"
            >
              CC-BY 4.0
            </a>
          </p>
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
