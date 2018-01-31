import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import OrientationOverlay from "./OrientationOverlay/index";

class AppContent extends Component {
  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  
  render() {
    return (
      <Fragment>
        {this.isMobileDevice() ? <OrientationOverlay /> : null }

        <div className={"container app-container"}>
          <nav className={"navbar app-header sticky-top"}>
            <h1 className={"navbar-brand mb-0 app-title"}>
              {this.props.appTitle}
            </h1>
          </nav>

          {this.props.children}
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
