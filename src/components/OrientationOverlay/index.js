import React, { Component } from "react";
import "./index.css";
import orientationIcon from "../../images/orientation.png";

class OrientationOverlay extends Component {
  render() {
    return (
      <div className="orientation-overlay">
        <div className="container overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 className="text">
                Please rotate your mobile device to portrait mode!
              </h3>
              <img
                className="icon"
                src={orientationIcon}
                alt="Orientation"
                width="50%"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrientationOverlay;
