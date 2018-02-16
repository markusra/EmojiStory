import React, { Component } from "react";
import Gender from "../../components/Survey/Gender/index";
import ITBackground from "../../components/Survey/ITBackground/index";
import EmojiUsage from "../../components/Survey/EmojiUsage";
import Interpretation from "../../components/Survey/Interpretation";
import Memorization from "../../components/Survey/Memorization";
import AgeAndCountryContainer from "../../components/Survey/AgeAndCountryContainer/index";
import { questionsUpdateDB } from "../../services/questionsUpdateDB";
import PropTypes from "prop-types";
import history from "./../../history";

// Connect to Redux store
import { connect } from "react-redux";

import { redirectUser } from "../../services/redirectUser";
import { setUserProgress } from "../../actions/index";

class Survey extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    redirectUser(this.props.userProgress);
  }

  handleSubmit() {
    questionsUpdateDB(
      this.props.dbKey,
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
    dbKey: state.dbKey,
    age: state.age,
    nationality: state.nationality,
    emojiUsage: state.emojiUsage,
    gender: state.gender,
    itBackground: state.itBackground,
    interpretation: state.interpretation,
    memorization: state.memorization,
    surveyPage: state.surveyPage
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
  dbKey: PropTypes.string,
  age: PropTypes.string,
  nationality: PropTypes.string,
  emojiUsage: PropTypes.string,
  gender: PropTypes.string,
  itBackground: PropTypes.string,
  interpretation: PropTypes.string,
  memorization: PropTypes.string,
  surveyPage: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
