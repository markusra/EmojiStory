import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import OrientationOverlay from "./OrientationOverlay/index";

class AppContent extends Component {
  render() {
    return (
      <Fragment>
        <OrientationOverlay />

        <div className={"container app-container"}>
          <nav className={"navbar app-header sticky-top"}>
            <h1 className={"navbar-brand mb-0 app-title"}>
              {this.props.appTitle}
            </h1>
          </nav>

          <div className={"app-body"}>
            {this.props.children.length > 1
              ? this.props.children[0]
              : this.props.children}
          </div>

          {this.props.children.length > 1 ? (
            <div className={"app-footer"}>
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
