import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import AppContainer from "../../AppContainer";
import GenderButtons from "./GenderButtons/index";
import SurveyBody from "./../SurveyBody";
import { connect } from "react-redux";

let strings = {
  en: {
    genderQuestion: "What is your gender?"
  },
  no: {
    genderQuestion: "Hva er ditt kjønn?"
  },
  de: {
    genderQuestion: "Was ist Ihr Geschlecht?"
  }
};

class Gender extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="d-flex genderContainer">
            <div className="p-2 text-center bottom-margin">
              <h3>{strings[this.props.language].genderQuestion}</h3>
            </div>
            <GenderButtons />
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

Gender.propTypes = {
  language: PropTypes.string
};

export default connect(mapStateToProps)(Gender);
