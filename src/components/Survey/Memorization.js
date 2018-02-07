import React, { Component } from "react";
import { Button } from "reactstrap";
import "./index.css";
import PropTypes from "prop-types";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";

class Memorization extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="answersContainer">
            <div className="questionDiv">
              <h3 className="story">How did you remember your emoji-password? I memorized...</h3>
            </div>
            <div className="options2">
              <Button
                className="surveyAnswerButton top"
                size="lg"
                onClick={() => this.props.setInterpretation("Yes")}
              >
                the emojis 
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setInterpretation("No")}
              >
                the story
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setInterpretation("No")}
              >
                the emojis and the story
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() => this.props.setInterpretation("I don't know")}
              >
                i did not remember
              </Button>
            </div>
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

Memorization.propTypes = {
  setInterpretation: PropTypes.func
};

export default Memorization;
