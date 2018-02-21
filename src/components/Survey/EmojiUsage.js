import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import AppContainer from "./../AppContainer";
import SurveyBody from "./SurveyBody";
import "./index.css";

import { connect } from "react-redux";
import { setEmojiUsage } from "../../actions/index";

class EmojiUsage extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3 className="story">How often do you use emojis?</h3>
            </div>
            <div className="options2">
              <Button
                className="surveyAnswerButton top"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage(
                    "Several times a day",
                    "interpretation"
                  )
                }
              >
                Several times a day
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage("Once a day", "interpretation")
                }
              >
                Once a day
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage(
                    "Several times a week",
                    "interpretation"
                  )
                }
              >
                Several times a week
              </Button>
              <Button
                className="surveyAnswerButton mid"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage("Once a week", "interpretation")
                }
              >
                Once a week
              </Button>
              <Button
                className="surveyAnswerButton bottom"
                size="lg"
                onClick={() =>
                  this.props.setEmojiUsage("Never", "interpretation")
                }
              >
                Never
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
    surveyPage: state.surveyPage
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
  setEmojiUsage: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiUsage);
