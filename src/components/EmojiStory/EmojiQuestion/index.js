import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";

// Import Bootstrap Components
import { Button } from "reactstrap";

class EmojiQuestion extends Component {
  render() {
    return (
      <Fragment>        
        <div className="questionContainer">
          <div className="storyDiv">
            <h3 className="story">{this.props.userStory}</h3>
          </div>

          <div className="options">
            <Button
              color="default"
              className="answerButton top"
              size="lg"
              onClick={() =>
                this.props.onAnswerSelected(this.props.answerOptions[0])
              }
            >
              {this.props.answerOptions[0].text[0].toUpperCase() +
                this.props.answerOptions[0].text.slice(1)}
            </Button>

            <Button
              color="default"
              className="answerButton mid"
              size="lg"
              onClick={() =>
                this.props.onAnswerSelected(this.props.answerOptions[1])
              }
            >
              {this.props.answerOptions[1].text[0].toUpperCase() +
                this.props.answerOptions[1].text.slice(1)}
            </Button>

            <Button
              color="default"
              className="answerButton mid"
              size="lg"
              onClick={() =>
                this.props.onAnswerSelected(this.props.answerOptions[2])
              }
            >
              {this.props.answerOptions[2].text[0].toUpperCase() +
                this.props.answerOptions[2].text.slice(1)}
            </Button>

            <Button
              color="default"
              className="answerButton mid"
              size="lg"
              onClick={() =>
                this.props.onAnswerSelected(this.props.answerOptions[3])
              }
            >
              {this.props.answerOptions[3].text[0].toUpperCase() +
                this.props.answerOptions[3].text.slice(1)}
            </Button>

            <Button
              color="default"
              className="answerButton bottom"
              size="lg"
              onClick={() =>
                this.props.onAnswerSelected(this.props.answerOptions[4])
              }
            >
              {this.props.answerOptions[4].text[0].toUpperCase() +
                this.props.answerOptions[4].text.slice(1)}
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

EmojiQuestion.propTypes = {
  userStory: PropTypes.array,
  answerOptions: PropTypes.array,
  onAnswerSelected: PropTypes.func
};

export default EmojiQuestion;
