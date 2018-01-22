import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import ButtonBar from "../../ButtonBar/index";

/*eslint no-undef: 0*/
class EmojiOverlay extends Component {
  render() {
    const visible = this.props.visible ? "fade-in" : "fade-out";
    return (
      <div className={"emoji-overlay " + visible}>
        <div className="container emoji-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 className="question">{this.props.question}</h3>
               <img
                className="icon"
                src={process.env.PUBLIC_URL + "/emojis/" + this.props.answer.src}
                alt="Placeholder"
                width="50%"
              />
              <h5 className="answer">{this.props.answer.text}</h5>
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
