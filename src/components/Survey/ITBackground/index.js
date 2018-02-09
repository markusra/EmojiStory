import React, { Component } from "react";
import AppContainer from "../../AppContainer";
import ITBackgroundButtons from "./ITBackgroundButtons/index";
import PropTypes from "prop-types";
import SurveyBody from "./../SurveyBody";
import "./../index.css";

class ITBackground extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <SurveyBody>
          <div className="surveyContainer">
            <div className="questionDiv">
              <h3>
                Do you have a background in IT or security?
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
  setITBackground: PropTypes.func
};

export default ITBackground;
