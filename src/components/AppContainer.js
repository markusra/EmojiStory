import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import OrientationOverlay from "./OrientationOverlay/index";
import { checkDeviceType } from "../services/checkDeviceType";

class AppContainer extends Component {
  render() {
    const device = checkDeviceType();
    return (
      <Fragment>
        {device === "mobile" ? <OrientationOverlay /> : null}

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

AppContainer.propTypes = {
  appTitle: PropTypes.string,
  appStyle: PropTypes.string,
  children: PropTypes.any
};

export default (AppContainer);
