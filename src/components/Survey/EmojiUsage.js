import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import "./index.css";
import PropTypes from "prop-types";
import EmojiContainer from "./../EmojiStory/EmojiContainer/index";
import EmojiBody from "./../EmojiStory/EmojiContainer/EmojiBody";
import AppBody from "./../AppBody";

class EmojiUsage extends Component {
  render() {
    return (
      <EmojiContainer>
        <EmojiBody>
          
            <div className="answersContainer">
              <div className="questionDiv">
                <h3 className="story">How often do you use emojis</h3>
              </div>

              <div className="options">
                <Button
                  color="default"
                  className="answerButton top"
                  size="lg"
                  // onClick={() =>
                  //   this.props.onAnswerSelected(this.props.answerOptions[0])
                  // }
                >
                  Several times a day
                </Button>

                <Button
                  color="default"
                  className="answerButton mid"
                  size="lg"
                  // onClick={() =>
                  //   this.props.onAnswerSelected(this.props.answerOptions[1])
                  // }
                >
                  Once a day
                </Button>

                <Button
                  color="default"
                  className="answerButton mid"
                  size="lg"
                  // onClick={() =>
                  //   this.props.onAnswerSelected(this.props.answerOptions[2])
                  // }
                >
                  Several times a week
                </Button>

                <Button
                  color="default"
                  className="answerButton mid"
                  size="lg"
                  // onClick={() =>
                  //   this.props.onAnswerSelected(this.props.answerOptions[3])
                  // }
                >
                  Once a week
                </Button>

                <Button
                  color="default"
                  className="answerButton bottom"
                  size="lg"
                  // onClick={() =>
                  //   this.props.onAnswerSelected(this.props.answerOptions[4])
                  // }
                >
                  Never
                </Button>
              </div>
            </div>
          
        </EmojiBody>
      </EmojiContainer>
    );
  }
}

EmojiUsage.propTypes = {
  onYesClick: PropTypes.func,
  onNoClick: PropTypes.func
};

export default EmojiUsage;
