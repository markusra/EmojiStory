import React, { Component } from "react";
import Gender from "./Gender/index";
import ITBackground from "./ITBackground/index";
import Survey from "./Survey/index";
import { sendDataToDB } from "../services/sendDataToDB";
import Finish from "./Finish/index";

class Survey2 extends Component {
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
    this.setEmail = this.setEmail.bind(this);
    this.setAge = this.setAge.bind(this);
    this.setNationality = this.setNationality.bind(this);
    this.setEmojiUse = this.setEmojiUse.bind(this);
    this.toFinishPage = this.toFinishPage.bind(this);
  }

  handleSubmit() {
    sendDataToDB(
      this.state.email,
      this.state.age,
      this.state.nationality,
      this.state.emojiUse,
      this.state.gender,
      this.state.itBackground
    );
  }

  setAge(value) {
    this.setState({
      age: value
    });
  }

  setEmail(value) {
    this.setState({
      email: value
    });
  }

  setNationality(value) {
    this.setState({
      nationality: value
    });
  }

  setEmojiUse(value) {
    this.setState({
      emojiUse: value
    });
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

  toFinishPage() {
    this.setState({
      page: "finish"
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
          <Survey
            onSubmitForm={this.handleSubmit}
            onEmailChange={this.setEmail}
            email={this.state.email}
            onAgeChange={this.setAge}
            age={this.state.age}
            onNationalityChange={this.setNationality}
            nationality={this.state.nationality}
            onEmojiUseChange={this.setEmojiUse}
            emojiUse={this.state.emojiUse}
            finished={this.toFinishPage}
          />
        )}
        {this.state.page === "finish" && <Finish />}
      </div>
    );
  }
}

export default Survey2;
