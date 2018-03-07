import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";
import "./index.css";

import { connect } from "react-redux";
import { setEmojiUsage } from "../../actions/index";

let strings = {
  en: {
    emojisQuestion: "How often do you use emojis?",
    alternative1: "Several times a day",
    alternative2: "Once a day",
    alternative3: "Several times a week",
    alternative4: "Once a week",
    alternative5: "Never"
  },
  no: {
    emojisQuestion: "Hvor ofte bruker du emojis?",
    alternative1: "Flere ganger daglig",
    alternative2: "Én gang daglig",
    alternative3: "Flere ganger i uken",
    alternative4: "Én gang i uken",
    alternative5: "Aldri"
  },
  de: {
    emojisQuestion: "Wie oft benutzen Sie Emojis?",
    alternative1: "Mehrmals täglich",
    alternative2: "Einmal täglich",
    alternative3: "Mehrmals in der Woche",
    alternative4: "Einmal in der Woche",
    alternative5: "Nie"
  }
};

class EmojiUsage extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3 className="story">{strings[this.props.language].emojisQuestion}</h3>
            </div>
            <div className="options2">
              <Button
                className="surveyAnswerButton top"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage(
                    "Several times a day",
                    "memorization"
                  )
                }
              >
                {strings[this.props.language].alternative1}
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage("Once a day", "memorization")
                }
              >
                {strings[this.props.language].alternative2}
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage(
                    "Several times a week",
                    "memorization"
                  )
                }
              >
                {strings[this.props.language].alternative3}
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage("Once a week", "memorization")
                }
              >
                {strings[this.props.language].alternative4}
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage("Never", "memorization")
                }
              >
                {strings[this.props.language].alternative5}
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
    emojiUsage: state.emojiUsage,
    surveyPage: state.surveyPage,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setEmojiUsage: (emojiUsage, surveyPage) => {
      dispatch(setEmojiUsage(emojiUsage, surveyPage));
    }
  };
};

EmojiUsage.propTypes = {
  setEmojiUsage: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiUsage);
