import React, { Component } from "react";
import { Button } from "reactstrap";
import "./index.css";
import PropTypes from "prop-types";
import EmojiContainer from "./../EmojiStory/EmojiContainer/index";
import EmojiBody from "./../EmojiStory/EmojiContainer/EmojiBody";
import AppContainer from "./../AppContainer";
import AppBody from "./../AppBody";
import SurveyBody from "./SurveyBody";

class Interpretation extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="answersContainer">
            <div className="questionDiv">
              <h3 className="story">Were you able to interpret the emojis you encountered?</h3>
            </div>
            <div className="options2">
              <Button
                className="surveyAnswerButton top"
                size="lg"
                onClick={() => this.props.setInterpretation("Yes")}
              >
                Yes
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setInterpretation("No")}
              >
                No
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() => this.props.setInterpretation("I don't know")}
              >
                I don't know
              </Button>
            </div>
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

Interpretation.propTypes = {
  setInterpretation: PropTypes.func
};

export default Interpretation;
