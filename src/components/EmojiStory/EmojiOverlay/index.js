import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import ButtonBar from "../../ButtonBar/index";

class EmojiOverlay extends Component {
  render() {
    const visible = this.props.visible ? "fade-in" : "fade-out";
    return (
      <div className={"emoji-overlay " + visible}>
        <div className="container emoji-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 className="text">{this.props.answer.text} : {this.props.answer.emojiID}</h3>
              {/* <img
                className="icon"
                src={orientationIcon}
                alt="Orientation"
                width="50%"
              /> */}
            </div>
          </div>
          <div className="footer">
            <ButtonBar
              onBackClick={this.props.onBackClick}
              onContinueClick={this.props.onContinueClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

EmojiOverlay.propTypes = {
  visible: PropTypes.bool,
  answer: PropTypes.any,
  onBackClick: PropTypes.func,
  onContinueClick: PropTypes.func
};

export default EmojiOverlay;
