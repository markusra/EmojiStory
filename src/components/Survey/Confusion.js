import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";

import { connect } from "react-redux";
import { setConfusion } from "../../actions/index";

let strings = {
  en: {
    confusionQuestion:
      "Did you understand the process of creating your emoji password?",
    alternative1: "Yes",
    alternative2: "No",
    alternative3: "Don't know"
  },
  no: {
    confusionQuestion:
      "Forstod du fremgangsmåten for å lage emoji-passordet ditt?",
    alternative1: "Ja",
    alternative2: "Nei",
    alternative3: "Vet ikke"
  },
  de: {
    confusionQuestion:
      "Verstandst du das Verfahren für die Erstellung deines Emoji-Passwortes? ",
    alternative1: "Ja",
    alternative2: "Nein",
    alternative3: "Weiß nicht"
  }
};

class Confusion extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="questionDiv">
            <h3 className="story">
              {strings[this.props.language].confusionQuestion}
            </h3>
          </div>
          <div className="options2">
            <Button
              className="surveyAnswerButton top"
              size="lg"
              onClick={() =>
                this.props.setConfusion("not confused", "fun")
              }
            >
              {strings[this.props.language].alternative1}
            </Button>
            <Button
              className="surveyAnswerButton mid"
              size="lg"
              onClick={() => this.props.setConfusion("confused", "fun")}
            >
              {strings[this.props.language].alternative2}
            </Button>
            <Button
              className="surveyAnswerButton bottom"
              size="lg"
              onClick={() => this.props.setConfusion("don't know", "fun")}
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
    setConfusion: (confusion, surveyPage) => {
      dispatch(setConfusion(confusion, surveyPage));
    }
  };
};

Confusion.propTypes = {
  setConfusion: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Confusion);
