import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";
import OrientationOverlay from "../../OrientationOverlay/index";
import { checkDeviceType } from "../../../services/checkDeviceType";
import { Button } from "reactstrap";
import html2canvas from "html2canvas";

class EmojiContainer extends Component {
  html2canvasFunction() {
    html2canvas(document.querySelector(".emoji-container")).then(canvas => {
      var a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "somefilename.png";
      a.click();
    });
  }

  render() {
    const device = checkDeviceType();
    return (
      <Fragment>
        {device === "mobile" ? <OrientationOverlay /> : null}

        <div className={"container emoji-container"}>{this.props.children}</div>
        <div className="attribution">
          <p>
            Emoji artwork is provided by{" "}
            <a
              href="https://www.emojione.com"
              rel="noopener noreferrer"
              target="_blank"
            >
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

        <div align="center">
          <Button
            size="lg"
            style={{ marginTop: "15px" }}
            color="warning"
            onClick={() => this.html2canvasFunction()}
          >
            Take screenshot
          </Button>
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
