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

    this.state = {
      page: "gender",
      age: "",
      nationality: "",
      emojiUsage: "",
      gender: "",
      itBackground: "",
      interpretation: "",
      memorization: ""
    };
    this.setITBackground = this.setITBackground.bind(this);
    this.setGender = this.setGender.bind(this);
    this.setEmojiUsage = this.setEmojiUsage.bind(this);
    this.setInterpretation = this.setInterpretation.bind(this);
    this.setMemorization = this.setMemorization.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendToDB = this.sendToDB.bind(this);
  }

  componentWillMount() {
    redirectUser(this.props.userProgress);
  }

  sendToDB() {
    const key = sendDataToDB(
      this.state.age,
      this.state.nationality,
      this.state.emojiUsage,
      this.state.gender,
      this.state.itBackground,
      this.state.interpretation,
      this.state.memorization
    );

    console.log(key);
  }

  handleSubmit() {
    this.sendToDB();
    const url = "/login2";
    this.props.setUserProgress(url);
    history.push(url);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setGender(value) {
    this.setState({
      gender: value,
      page: "itbackground"
    });
  }

  setITBackground(value) {
    this.setState({
      itBackground: value,
      page: "emojiUsage"
    });
  }

  setEmojiUsage(value) {
    this.setState({
      emojiUsage: value,
      page: "interpretation"
    });
  }

  setInterpretation(value) {
    this.setState({
      interpretation: value,
      page: "memorization"
    });
  }

  setMemorization(value) {
    this.setState({
      memorization: value,
      page: "questions"
    });
  }

  render() {
    return (
      <div>
        {this.state.page === "gender" && <Gender setGender={this.setGender} />}
        {this.state.page === "itbackground" && (
          <ITBackground setITBackground={this.setITBackground} />
        )}
        {this.state.page === "emojiUsage" && (
          <EmojiUsage setEmojiUsage={this.setEmojiUsage} />
        )}
        {this.state.page === "interpretation" && (
          <Interpretation setInterpretation={this.setInterpretation} />
        )}
        {this.state.page === "memorization" && (
          <Memorization setMemorization={this.setMemorization} />
        )}
        {this.state.page === "questions" && (
          <AgeAndCountryContainer
            onSubmitForm={this.handleSubmit}
            onInputChange={this.handleChange}
            email={this.state.email}
            age={this.state.age}
            nationality={this.state.nationality}
            emojiUse={this.state.emojiUse}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress
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

