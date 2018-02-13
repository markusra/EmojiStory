import React, { Component } from "react";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";

import "./index.css";

import { connect } from "react-redux";
import { setInterpretation } from "../../actions/index";

class Interpretation extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3 className="story">
                Were you able to interpret all the emojis you encountered?
              </h3>
            </div>
            <div className="options2">
              <Button
                className="surveyAnswerButton top"
                size="lg"
                onClick={() => this.props.setInterpretation("Yes", "memorization")}
              >
                Yes
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setInterpretation("No", "memorization")}
              >
                No
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() => this.props.setInterpretation("I don't know", "memorization")}
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

const mapStateToProps = state => {
  return {
    interpretation: state.interpretation,
    surveyPage: state.surveyPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInterpretation: (interpretation, surveyPage) => {
      dispatch(setInterpretation(interpretation, surveyPage));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Interpretation);
