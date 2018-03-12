import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";

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
    emojisQuestion: "Wie oft benutzt du Emojis?",
    alternative1: "Mehrmals täglich",
    alternative2: "Einmal täglich",
    alternative3: "Mehrmals in der Woche",
    alternative4: "Einmal in der Woche",
    alternative5: "Nie"
  }
};

class EmojiUsage extends Component {
  render() {
    var page = "itBackground";

    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="questionDiv">
            <h3 className="story">
              {strings[this.props.language].emojisQuestion}
            </h3>
          </div>
          <div className="options2">
            <Button
              className="surveyAnswerButton top"
              size="lg"
              onClick={() =>
                this.props.setEmojiUsage("several times a day", page)
              }
            >
              {strings[this.props.language].alternative1}
            </Button>
            <Button
              className="surveyAnswerButton mid"
              size="lg"
              onClick={() => this.props.setEmojiUsage("once a day", page)}
            >
              {strings[this.props.language].alternative2}
            </Button>
            <Button
              className="surveyAnswerButton mid"
              size="lg"
              onClick={() =>
                this.props.setEmojiUsage("several times a week", page)
              }
            >
              {strings[this.props.language].alternative3}
            </Button>
            <Button
              className="surveyAnswerButton mid"
              size="lg"
              onClick={() => this.props.setEmojiUsage("once a week", page)}
            >
              {strings[this.props.language].alternative4}
            </Button>
            <Button
              className="surveyAnswerButton bottom"
              size="lg"
              onClick={() => this.props.setEmojiUsage("never", page)}
            >
              {strings[this.props.language].alternative5}
            </Button>
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
    language: state.language,
    correctPassword: state.correctPassword
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
  language: PropTypes.string,
  correctPassword: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiUsage);
