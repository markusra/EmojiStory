import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import OrientationOverlay from "./OrientationOverlay/index";

class AppContent extends Component {
  render() {
    return (
      <Fragment>
        <OrientationOverlay />
        <div className="container app-container">
          <div className="app-header">
            <h3 className="app-title">{this.props.appTitle}</h3>
          </div>
          <div className="app-body">
            {this.props.children.length > 1
              ? this.props.children[0]
              : this.props.children}
          </div>
          <div className="app-footer stickyFooter">
            {this.props.children.length > 1 ? this.props.children[1] : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

AppContent.propTypes = {
  appTitle: PropTypes.string,
  children: PropTypes.any
};

export default AppContent;
