import React, { Component } from "react";
import AppContainer from "../../AppContainer";
import ITBackgroundButtons from "./ITBackgroundButtons/index";
import PropTypes from "prop-types";
import SurveyBody from "./../SurveyBody";
import "./../index.css";
import { connect } from "react-redux";

let strings = {
  en: {
    itBackgroundQuestion: "Do you have a background in IT or information security?"
  },
  no: {
    itBackgroundQuestion: "Har du en bakgrunn innen IT eller informasjonssikkerhet?"
  },
  de: {
    itBackgroundQuestion: "Haben Sie Erfahrung mit IT oder Informationssicherheit?"
  }
};

class ITBackground extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3>
                {strings[this.props.language].itBackgroundQuestion}
              </h3>
            </div>

            <div className="options2">
              <ITBackgroundButtons
                setITBackground={this.props.setITBackground}
              />
            </div>
          </div>
        </SurveyBody>
      </AppContainer>
    );
  }
}

ITBackground.propTypes = {
  setITBackground: PropTypes.func,
  language: PropTypes.string
};

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(ITBackground);
