import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import OrientationOverlay from "./OrientationOverlay/index";

class AppContent extends Component {
  render() {
   
    if (this.props.appStyle === "emojiQuestion") {
      this.appType = "emoji";
    } else {
      this.appType = "app";
    }

    return (
      <Fragment>
        <OrientationOverlay />

        <div className={"container " + this.appType + "-container"}>
          <nav className={"navbar " + this.appType + "-header sticky-top"}>
            <h1 className={"navbar-brand mb-0 " + this.appType + "-title"}>
              {this.props.appTitle}
            </h1>
          </nav>
          <div className={this.appType + "-body"}>
            {this.props.children.length > 1
              ? this.props.children[0]
              : this.props.children}
          </div>
          {this.props.children.length > 1 ? (
            <div className={this.appType + "-footer"}>
              {this.props.children[1]}{" "}
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

AppContent.propTypes = {
  appTitle: PropTypes.string,
  appStyle: PropTypes.string,
  children: PropTypes.any
};

export default AppContent;
