import React, { Component } from "react";
import PropTypes from "prop-types";
import Gender from "../../components/Survey/Gender/index";
import ITBackground from "../../components/Survey/ITBackground/index";
import EmojiUsage from "../../components/Survey/EmojiUsage";
import Interpretation from "../../components/Survey/Interpretation";
import Memorization from "../../components/Survey/Memorization";
import AgeAndCountryContainer from "../../components/Survey/AgeAndCountryContainer/index";
import history from "./../../history";
import { connect } from "react-redux";
import { redirectUser } from "../../services/redirectUser";
import {
  questionsUpdateDB,
  timestampUpdateDB
} from "../../services/databaseFunctions";
import { calculateTimeUsed } from "../../services/timestamping";
import { setUserProgress } from "../../actions/index";

class Survey extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    redirectUser(this.props.userProgress);
    // Calculate time spent on logging in the first time and send it to DB
    const timeUsed = calculateTimeUsed(
      this.props.timestamp1,
      this.props.timestamp2
    );
    timestampUpdateDB("timestamp4", timeUsed, this.props.loginAttempts);
  }

  handleSubmit() {
    questionsUpdateDB(
      this.props.age,
      this.props.emojiUsage,
      this.props.gender,
      this.props.interpretation,
      this.props.itBackground,
      this.props.memorization,
      this.props.nationality
    );
    const url = "/login2";
    this.props.setUserProgress(url);
    history.push(url);
  }

  render() {
    return (
      <div>
        {this.props.surveyPage === "gender" && <Gender />}
        {this.props.surveyPage === "itBackground" && <ITBackground />}
        {this.props.surveyPage === "emojiUsage" && <EmojiUsage />}
        {this.props.surveyPage === "interpretation" && <Interpretation />}
        {this.props.surveyPage === "memorization" && <Memorization />}
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
    loginAttempts: state.loginAttempts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserProgress: userProgress => {
      dispatch(setUserProgress(userProgress));
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
  timestamp1: PropTypes.number,
  timestamp2: PropTypes.number,
  loginAttempts: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
