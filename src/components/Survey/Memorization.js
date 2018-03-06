import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";
import "./index.css";

import { connect } from "react-redux";
import { setMemorization } from "../../actions/index";

let strings = {
  en: {
    memoryQuestion: "I remembered my emoji-password by memorizing…",
    alternative1: "the emojis",
    alternative2: "the story",
    alternative3: "the emojis and the story",
    alternative4: "something else"
  },
  no: {
    memoryQuestion: "Jeg husket emoji-passordet mitt ved hjelp av…",
    alternative1: "emojiene",
    alternative2: "historien",
    alternative3: "emojiene og historien",
    alternative4: "noe annet"
  },
  de: {
    memoryQuestion: "Ich merkte mir das Emoji-Passwort mit Hilfe von…",
    alternative1: "den Emojis",
    alternative2: "der Geschichte",
    alternative3: "den Emojis und der Geschichte",
    alternative4: "etwas anderem"
  }
};

class Memorization extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3 className="story">{strings[this.props.language].memoryQuestion}</h3>
            </div>
            <div className="options2">
              <Button
                className="surveyAnswerButton top"
                size="lg"
                onClick={() => this.props.setMemorization("the emojis", "confusion")}
              >
                {strings[this.props.language].alternative1}
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setMemorization("the story", "confusion")}
              >
                {strings[this.props.language].alternative2}
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setMemorization("the emojis and the story", "confusion")}
              >
                {strings[this.props.language].alternative3}
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() => this.props.setMemorization("something else", "confusion")}
              >
                {strings[this.props.language].alternative4}
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
    surveyPage: state.surveyPage,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMemorization: (memorization, surveyPage) => {
      dispatch(setMemorization(memorization, surveyPage));
    }
  };
};

Memorization.propTypes = {
  setMemorization: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Memorization);
