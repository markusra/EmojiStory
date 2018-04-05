import React, { Component } from "react";
import PropTypes from "prop-types";
import Gender from "../../components/Survey/Gender/index";
import ITBackground from "../../components/Survey/ITBackground";
import EmojiUsage from "../../components/Survey/EmojiUsage";
import Memorization from "../../components/Survey/Memorization";
import Strategy from "../../components/Survey/Strategy";
import Confusion from "../../components/Survey/Confusion";
import Fun from "../../components/Survey/Fun";
import AgeAndCountryContainer from "../../components/Survey/AgeAndCountryContainer/index";
import history from "./../../history";
import { connect } from "react-redux";
import { setAttemptsLeft } from "../../actions/index";

class Survey extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // this.props.setCorrectPassword("false");

    this.props.setAttemptsLeft(3);
    const url = "/login";
    history.push(url);
  }

  render() {
    let surveyPage;
    switch (this.props.surveyPage) {
      case "strategy":
        surveyPage = <Strategy />;
        break;
      case "memorization":
        surveyPage = <Memorization />;
        break;
      case "confusion":
        surveyPage = <Confusion />;
        break;
      case "fun":
        surveyPage = <Fun />;
        break;
      case "emojiUsage":
        surveyPage = <EmojiUsage />;
        break;
      case "itBackground":
        surveyPage = <ITBackground />;
        break;
      case "gender":
        surveyPage = <Gender />;
        break;
      case "questions":
        surveyPage = (
          <AgeAndCountryContainer onSubmitForm={this.handleSubmit} />
        );
        break;
      default:
        surveyPage = <EmojiUsage />;
    }
    return <div>{surveyPage}</div>;
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress,
    age: state.age,
    nationality: state.nationality,
    emojiUsage: state.emojiUsage,
    gender: state.gender,
    itBackground: state.itBackground,
    interpretation: state.interpretation,
    memorization: state.memorization,
    surveyPage: state.surveyPage,
    timestamp1: state.timestamp1,
    timestamp2: state.timestamp2,
    attemptsLeft: state.attemptsLeft,
    strategy: state.strategy,
    confusion: state.confusion,
    fun: state.fun,
    correctPassword: state.correctPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAttemptsLeft: attemptsLeft => {
      dispatch(setAttemptsLeft(attemptsLeft));
    }
  };
};

Survey.propTypes = {
  userProgress: PropTypes.string,
  age: PropTypes.string,
  nationality: PropTypes.string,
  emojiUsage: PropTypes.string,
  gender: PropTypes.string,
  itBackground: PropTypes.string,
  interpretation: PropTypes.string,
  memorization: PropTypes.string,
  surveyPage: PropTypes.string,
  setAttemptsLeft: PropTypes.func,
  timestamp1: PropTypes.number,
  timestamp2: PropTypes.number,
  attemptsLeft: PropTypes.number,
  strategy: PropTypes.string,
  confusion: PropTypes.string,
  fun: PropTypes.string,
  correctPassword: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
