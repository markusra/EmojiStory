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
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3 className="story">I remembered my emoji-password by memorizing...</h3>
            </div>
            <div className="options2">
              <Button
                className="surveyAnswerButton top"
                size="lg"
                onClick={() => this.props.setMemorization("the emojis")}
              >
                the emojis 
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setMemorization("the story")}
              >
                the story
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setMemorization("the emojis and the story")}
              >
                the emojis and the story
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() => this.props.setMemorization("I don't know")}
              >
                nothing
              </Button>
            </div>
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

Memorization.propTypes = {
  setMemorization: PropTypes.func
};

export default Memorization;
