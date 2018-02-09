import React, { Component } from "react";
import { Button } from "reactstrap";
import "./index.css";
import PropTypes from "prop-types";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";

class EmojiUsage extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3 className="story">How often do you use emojis?</h3>
            </div>
            <div className="options2">
              <Button
                className="surveyAnswerButton top"
                size="lg"
                onClick={() => this.props.setEmojiUsage("Several times a day")}
              >
                Several times a day
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setEmojiUsage("Once a day")}
              >
                Once a day
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setEmojiUsage("Several times a week")}
              >
                Several times a week
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setEmojiUsage("Once a week")}
              >
                Once a week
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() => this.props.setEmojiUsage("Never")}
              >
                Never
              </Button>
            </div>
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

EmojiUsage.propTypes = {
  setEmojiUsage: PropTypes.func
};

export default EmojiUsage;
