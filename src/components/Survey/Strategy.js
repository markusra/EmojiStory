import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";
import { connect } from "react-redux";
import { setStrategy } from "../../actions/index";

let strings = {
  en: {
    // strategyQuestion: (<Fragment><p>What strategy did you use when you created your story?</p> <p>I used...</p></Fragment>),
    // alternative1: "words that had personal meaning",
    // alternative2: "words that formed a crazy story",
    // alternative3: "random words",
    // alternative4: "a different strategy"
    strategyQuestion: (
      <Fragment>
        <p>Select the most accurate statement:</p> <p>My story...</p>
      </Fragment>
    ),
    alternative1: "has a personal touch",
    alternative2: "is crazy",
    alternative3: "contains random emojis",
    alternative4: "is created in another way"
  },
  no: {
    // strategyQuestion: (<Fragment><p>Hvilken strategi brukte du da du lagde historien din?</p> <p>Jeg valgte...</p></Fragment>),
    // alternative1: "ord med personlig betydning",
    // alternative2: "ord som formet en sprø historie",
    // alternative3: "tilfeldige ord",
    // alternative4: "å bruke en annen strategi"
    strategyQuestion: (
      <Fragment>
        <p>Velg den mest korrekte påstanden:</p> <p>Min historie...</p>
      </Fragment>
    ),
    alternative1: "har et personlig preg",
    alternative2: "er sprø/absurd",
    alternative3: "inneholder tilfeldige emojis",
    alternative4: "er lagd på en annen måte"
  },
  de: {
    strategyQuestion: (
      <Fragment>
        <p>Welche Strategie hast du benutzt, um deine Geschichte zu erzeugen?</p>{" "}
        <p>Meine Geschichte...</p>
      </Fragment>
    ),
    alternative1: "hat eine persönliche Note",
    alternative2: "ist absurd/skurril",
    alternative3: "besteht aus zufälligen Emojis",
    alternative4: "wurde auf eine andere Weise erstellt"
  }
};

class Strategy extends Component {
  render() {
    let page;
    if (this.props.correctPassword === "true") {
      page = "memorization";
    } else {
      page = "confusion";
    }
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="questionDiv">
            <h3 className="story">
              {strings[this.props.language].strategyQuestion}
            </h3>
          </div>
          <div className="options2">
            <Button
              className="surveyAnswerButton top"
              size="lg"
              onClick={() => this.props.setStrategy("personal", page)}
            >
              {strings[this.props.language].alternative1}
            </Button>
            <Button
              className="surveyAnswerButton mid"
              size="lg"
              onClick={() => this.props.setStrategy("crazy", page)}
            >
              {strings[this.props.language].alternative2}
            </Button>
            <Button
              className="surveyAnswerButton mid"
              size="lg"
              onClick={() => this.props.setStrategy("random", page)}
            >
              {strings[this.props.language].alternative3}
            </Button>
            <Button
              className="surveyAnswerButton bottom"
              size="lg"
              onClick={() => this.props.setStrategy("different", page)}
            >
              {strings[this.props.language].alternative4}
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
    language: state.language,
    correctPassword: state.correctPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStrategy: (strategy, surveyPage) => {
      dispatch(setStrategy(strategy, surveyPage));
    }
  };
};

Strategy.propTypes = {
  setStrategy: PropTypes.func,
  language: PropTypes.string,
  correctPassword: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Strategy);
