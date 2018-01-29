import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";
import OrientationOverlay from "../../OrientationOverlay/index";

class EmojiContainer extends Component {
  render() {
    return (
      <Fragment>
        <OrientationOverlay />

        <div className={"container emoji-container"}>
          <nav className={"navbar emoji-header sticky-top"}>
            <h1 className={"navbar-brand mb-0 emoji-title"}>
              {this.props.appTitle}
            </h1>
          </nav>
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
