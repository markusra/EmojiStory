import React, { Component } from "react";
import Gender from "../../components/Survey/Gender/index";
import ITBackground from "../../components/Survey/ITBackground/index";
import EmojiUsage from "../../components/Survey/EmojiUsage";
import Interpretation from "../../components/Survey/Interpretation";
import Memorization from "../../components/Survey/Memorization";
import AgeAndCountryContainer from "../../components/Survey/AgeAndCountryContainer/index";
import { sendDataToDB } from "../../services/sendDataToDB";
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
    sendDataToDB(
      this.props.age,
      this.props.nationality,
      this.props.emojiUsage,
      this.props.gender,
      this.props.itBackground,
      this.props.interpretation,
      this.props.memorization
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
  userProgress: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
