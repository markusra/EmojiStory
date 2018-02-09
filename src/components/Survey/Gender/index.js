import React, { Component } from "react";
import AppContainer from "../../AppContainer";
import GenderButtons from "./GenderButtons/index";
import PropTypes from "prop-types";
import SurveyBody from "./../SurveyBody";
import "./index.css";

class Gender extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="d-flex genderContainer">
            <div className="p-2 text-center bottom-margin">
              <h3>What is your gender?</h3>
            </div>
            <GenderButtons setGender={this.props.setGender} />
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

Gender.propTypes = {
  setGender: PropTypes.func
};

export default Gender;
