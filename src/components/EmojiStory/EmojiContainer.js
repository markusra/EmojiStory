import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import OrientationOverlay from "../OrientationOverlay/index";

class EmojiContainer extends Component {
  render() {
    return (
      <Fragment>
        <OrientationOverlay />

        <div className={"container emoji-container"}>
          {this.props.children.length > 1
            ? this.props.children[0]
            : this.props.children}

          <nav className={"navbar emoji-header sticky-top"}>
            <h1 className={"navbar-brand mb-0 emoji-title"}>
              {this.props.appTitle}
            </h1>
          </nav>

          <div className={"emoji-body"}>
            {this.props.children.length > 1
              ? this.props.children[1]
              : this.props.children}
          </div>

          {this.props.children.length > 1 ? (
            <div className={"emoji-footer"}>{this.props.children[2]} </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

EmojiContainer.propTypes = {
  appTitle: PropTypes.string,
  appStyle: PropTypes.string,
  appOverlay: PropTypes.bool,
  onBackClick: PropTypes.func,
  onContinueClick: PropTypes.func,
  children: PropTypes.any
};

export default EmojiContainer;
