import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";

import { connect } from "react-redux";
import { setFun } from "../../actions/index";

let strings = {
  en: {
    funQuestion: "Did you enjoy creating your emoji password?",
    alternative1: "Yes",
    alternative2: "No",
    alternative3: "Don't know"
  },
  no: {
    funQuestion: "Var det gøy å lage emoji-passordet ditt?",
    alternative1: "Ja",
    alternative2: "Nei",
    alternative3: "Vet ikke"
  },
  de: {
    funQuestion: "Fandest du es spaßig dein Emoji-Passwort zu erstellen?",
    alternative1: "Ja",
    alternative2: "Nein",
    alternative3: "Weiß nicht"
  }
};

class Fun extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="questionDiv">
            <h3 className="story">
              {strings[this.props.language].funQuestion}
            </h3>
          </div>
          <div className="options2">
            <Button
              className="surveyAnswerButton top"
              size="lg"
              onClick={() => this.props.setFun("yes", "emojiUsage")}
            >
              {strings[this.props.language].alternative1}
            </Button>
            <Button
              className="surveyAnswerButton mid"
              size="lg"
              onClick={() => this.props.setFun("no", "emojiUsage")}
            >
              {strings[this.props.language].alternative2}
            </Button>
            <Button
              className="surveyAnswerButton bottom"
              size="lg"
              onClick={() => this.props.setFun("don't know", "emojiUsage")}
            >
              {strings[this.props.language].alternative3}
            </Button>
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    surveyPage: state.surveyPage,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFun: (fun, surveyPage) => {
      dispatch(setFun(fun, surveyPage));
    }
  };
};

Fun.propTypes = {
  setFun: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Fun);
