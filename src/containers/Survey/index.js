import React, { Component } from "react";
import Gender from "../../components/Survey/Gender/index";
import ITBackground from "../../components/Survey/ITBackground/index";
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
      email: "",
      age: "",
      nationality: "",
      emojiUse: "",
      gender: "",
      itBackground: ""
    };
    this.setITBackgroundTrue = this.setITBackgroundTrue.bind(this);
    this.setITBackgroundFalse = this.setITBackgroundFalse.bind(this);
    this.setFemale = this.setFemale.bind(this);
    this.setMale = this.setMale.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendToDB = this.sendToDB.bind(this);
  }

  sendToDB() {
    const key = sendDataToDB(
      this.state.email,
      this.state.age,
      this.state.nationality,
      this.state.emojiUse,
      this.state.gender,
      this.state.itBackground
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
    this.setState({[e.target.name]: e.target.value});
  }

  setITBackgroundTrue() {
    this.setState({
      page: "questions",
      itBackground: "yes"
    });
  }

  setITBackgroundFalse() {
    this.setState({
      page: "questions",
      itBackground: "no"
    });
  }

  setFemale() {
    this.setState({
      gender: "female",
      page: "itbackground"
    });
  }

  setMale() {
    this.setState({
      gender: "male",
      page: "itbackground"
    });
  }

  render() {
    return (
      <div>
        {this.state.page === "gender" && (
          <Gender onFemaleClick={this.setFemale} onMaleClick={this.setMale} />
        )}
        {this.state.page === "itbackground" && (
          <ITBackground
            onYesClick={this.setITBackgroundTrue}
            onNoClick={this.setITBackgroundFalse}
          />
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

