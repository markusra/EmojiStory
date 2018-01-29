import React, { Component } from "react";
import PropTypes from "prop-types";

class EmojiBody extends Component {
  render() {
    return (
      <div className={"emoji-body"}>
         {this.props.children}
      </div>
    );
  }
}

EmojiBody.propTypes = {
  children: PropTypes.any
};

export default EmojiBody;
