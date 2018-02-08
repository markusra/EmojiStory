import React, { Component } from "react";
import Gender from "../../components/Survey/Gender/index";
import ITBackground from "../../components/Survey/ITBackground/index";
import EmojiUsage from "../../components/Survey/EmojiUsage";
import Interpretation from "../../components/Survey/Interpretation";
import Memorization from "../../components/Survey/Memorization";
import FinalQuestionsContainer from "../../components/Survey/FinalQuestionsContainer";
import { sendDataToDB } from "../../services/sendDataToDB";
import Finish from "../Finish/index";
import PropTypes from "prop-types";

// Connect to Redux store
import { connect } from "react-redux";

// import { redirectUser } from "../../services/redirectUser";

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
    this.setState({
      page: "finish"
    });
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
          <FinalQuestionsContainer
            onSubmitForm={this.handleSubmit}
            onInputChange={this.handleChange}
            email={this.state.email}
            age={this.state.age}
            nationality={this.state.nationality}
            emojiUse={this.state.emojiUse}
          />
        )}
        {this.state.page === "finish" && <Finish />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress
  };
};

Survey.propTypes = {
  userProgress: PropTypes.string
};

export default connect(mapStateToProps)(Survey);
