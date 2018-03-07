import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";

import "./index.css";

import { connect } from "react-redux";
import { setInterpretation } from "../../actions/index";

let strings = {
  en: {
    interpretationQuestion: "Did you understand the meaning of all the emojis you encountered?",
    alternative1: "Yes",
    alternative2: "No",
    alternative3: "I don‘t kow"
  },
  no: {
    interpretationQuestion: "Forstod du betydningen til alle emojiene du så?",
    alternative1: "Ja",
    alternative2: "Nei",
    alternative3: "Vet ikke"
  },
  de: {
    interpretationQuestion: "",
    alternative1: "",
    alternative2: "",
    alternative3: ""
  }
};

class Interpretation extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3 className="story">
              {strings[this.props.language].interpretationQuestion}
              </h3>
            </div>
            <div className="options2">
              <Button
                className="surveyAnswerButton top"
                size="lg"
                onClick={() => this.props.setInterpretation("yes", "memorization")}
              >
                {strings[this.props.language].alternative1}
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setInterpretation("no", "memorization")}
              >
                {strings[this.props.language].alternative2}
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() => this.props.setInterpretation("don't know", "memorization")}
              >
                {strings[this.props.language].alternative3}
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
    surveyPage: state.surveyPage,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInterpretation: (interpretation, surveyPage) => {
      dispatch(setInterpretation(interpretation, surveyPage));
    }
  };
};

Interpretation.propTypes = {
  setInterpretation: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Interpretation);
