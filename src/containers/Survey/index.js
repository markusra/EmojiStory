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
import { redirectUser } from "../../services/redirectUser";
import { questionsUpdateDB } from "../../services/databaseFunctions";
import { setUserProgress, setAttemptsLeft } from "../../actions/index";
import { calculateTimeUsed } from "../../services/timestamping";
import { timestampUpdateDB } from "../../services/databaseFunctions";

class Survey extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    redirectUser(this.props.userProgress);
    if (this.props.userProgress === "/survey") {
      const timeUsed = calculateTimeUsed(
        this.props.timestamp1,
        this.props.timestamp2
      );
      timestampUpdateDB("timestamp4", timeUsed, 3 - this.props.attemptsLeft, this.props.correctPassword);
    }
  }

  handleSubmit() {
    questionsUpdateDB(
      this.props.age,
      this.props.emojiUsage,
      this.props.gender,
      this.props.itBackground,
      this.props.memorization,
      this.props.nationality,
      this.props.strategy,
      this.props.confusion,
      this.props.fun
    );
    // this.props.setCorrectPassword("false");

    this.props.setAttemptsLeft(3);
    const url = "/login";
    this.props.setUserProgress(url);
    history.push(url);
  }

  render() {
    return (
      <div>
        {this.props.surveyPage === "emojiUsage" && <EmojiUsage />}
        {this.props.surveyPage === "memorization" && <Memorization />}
        {this.props.surveyPage === "confusion" && <Confusion />}
        {this.props.surveyPage === "strategy" && <Strategy />}
        {this.props.surveyPage === "fun" && <Fun />}
        {this.props.surveyPage === "itBackground" && <ITBackground />}
        {this.props.surveyPage === "gender" && <Gender />}
        {this.props.surveyPage === "questions" && (
          <AgeAndCountryContainer onSubmitForm={this.handleSubmit} />
        )}
      </div>
    );
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
    setUserProgress: userProgress => {
      dispatch(setUserProgress(userProgress));
    },
    setAttemptsLeft: attemptsLeft => {
      dispatch(setAttemptsLeft(attemptsLeft));
    }
  };
};

Survey.propTypes = {
  userProgress: PropTypes.string,
  setUserProgress: PropTypes.func,
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
