import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";

import "./index.css";

import { connect } from "react-redux";
import { setStrategy } from "../../actions/index";

let strings = {
  en: {
    interpretationQuestion: "What strategy did you use when you created your story?",
    alternative1: "I chose the words that fitted the story the best",
    alternative2: "I tried to create a story that had personal meaning",
    alternative3: "I created a crazy story that didn't make sense",
    alternative4: "I chose the words at random"
  },
  no: {
    interpretationQuestion: "Hvilken strategi brukte du da du lagde historien din?",
    alternative1: "Jeg valgte ord som passet best til historien",
    alternative2: "Jeg prøvde å lage en historie som hadde personlig betydning",
    alternative3: "Jeg lagde en sprø historie som ikke gav mening",
    alternative4: "Jeg valgte ordene tilfeldig"
  },
  de: {
    interpretationQuestion: "",
    alternative1: "",
    alternative2: "",
    alternative3: "",
    alternative4: ""
  }
};

class Strategy extends Component {
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
                onClick={() => this.props.setStrategy("Best fit", "questions")}
              >
                {strings[this.props.language].alternative1}
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setStrategy("Personal", "questions")}
              >
                {strings[this.props.language].alternative2}
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() => this.props.setStrategy("Crazy", "questions")}
              >
                {strings[this.props.language].alternative3}
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() => this.props.setStrategy("Random", "questions")}
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
    surveyPage: state.surveyPage,
    language: state.language
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
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Strategy);
