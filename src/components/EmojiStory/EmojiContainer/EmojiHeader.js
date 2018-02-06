import React, { Component } from "react";
import PropTypes from "prop-types";

class EmojiHeader extends Component {
  render() {
    return (
      <nav className={"navbar emoji-header sticky-top"}>
        <h1 className={"navbar-brand mb-0 emoji-title"}>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

EmojiHeader.propTypes = {
  title: PropTypes.string
};

export default EmojiHeader;
