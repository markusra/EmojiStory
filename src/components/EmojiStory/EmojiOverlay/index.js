import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import ButtonBar from "../../ButtonBar/index";

class EmojiOverlay extends Component {
  render() {
    const visible = this.props.visible ? "fade-in" : "fade-out";
    const emojiPath = "/emojis/";
    return (
      <div className={"emoji-overlay " + visible}>
        <div className="container emoji-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
               <img
                className="icon"
                src={emojiPath + this.props.answer.src}
                draggable="false"
                alt="Emoji"
                width="50%"
              />
              <h3 className="answer">{this.props.answer.text[0].toUpperCase() + this.props.answer.text.slice(1)}</h3>
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
  question: PropTypes.string,
  answer: PropTypes.any,
  onBackClick: PropTypes.func,
  onContinueClick: PropTypes.func
};

export default EmojiOverlay;
