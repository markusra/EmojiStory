import React, { Component } from "react";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";
import "./index.css";

import { connect } from "react-redux";
import { setMemorization } from "../../actions/index";

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
                onClick={() => this.props.setMemorization("the emojis", "questions")}
              >
                the emojis 
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setMemorization("the story", "questions")}
              >
                the story
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setMemorization("the emojis and the story", "questions")}
              >
                the emojis and the story
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() => this.props.setMemorization("something else", "questions")}
              >
                something else
              </Button>
            </div>
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    memorization: state.memorization,
    surveyPage: state.surveyPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMemorization: (memorization, surveyPage) => {
      dispatch(setMemorization(memorization, surveyPage));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Memorization);
