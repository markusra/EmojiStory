import React, { Component } from "react";
import PropTypes from "prop-types";

class EmojiFooter extends Component {
  render() {
    return (
      <div className={"emoji-footer"}>
         {this.props.children}
      </div>
    );
  }
}

EmojiFooter.propTypes = {
  children: PropTypes.any
};

export default EmojiFooter;