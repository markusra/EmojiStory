import React, { Component } from "react";
import AppContainer from "../AppContainer";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import SurveyBody from "./SurveyBody";
import "./index.css";
import { connect } from "react-redux";
import { setItBackground } from "../../actions/index";

let strings = {
  en: {
    itBackgroundQuestion: "Do you have a background in IT or information security?",
    yes: "Yes",
    no: "No"
  },
  no: {
    itBackgroundQuestion: "Har du en bakgrunn innen IT eller informasjonssikkerhet?",
    yes: "Ja",
    no: "Nei"
  },
  de: {
    itBackgroundQuestion: "Hast du Erfahrung mit Informationstechnologie oder Informationssicherheit?",
    yes: "Ja",
    no: "Nein"
  }
};

class ITBackground extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3>
                {strings[this.props.language].itBackgroundQuestion}
              </h3>
            </div>

            <div className="options2">
            <Button
          className="surveyAnswerButton top"
          size="lg"
          onClick={() => {
            this.props.setItBackground("yes", "gender");
          }}
        >
          {strings[this.props.language].yes}
        </Button>

        <Button
          className="surveyAnswerButton buttom"
          size="lg"
          onClick={() => {
            this.props.setItBackground("no", "gender");
          }}
        >
          {strings[this.props.language].no}
        </Button>

            </div>
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

ITBackground.propTypes = {
  setItBackground: PropTypes.func,
  language: PropTypes.string
};

const mapStateToProps = state => {
  return {
    language: state.language,
    setItBackground: PropTypes.func,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setItBackground: (itBackground, surveyPage) => {
      dispatch(setItBackground(itBackground, surveyPage));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ITBackground);
