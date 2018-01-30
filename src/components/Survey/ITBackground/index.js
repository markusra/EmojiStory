import React, { Component } from "react";
import AppContainer from "../../AppContainer";
import AppBody from "../../AppBody";
import BackgroundButtons from "./ITBackgroundButtons/index";
import PropTypes from "prop-types";

class ITBackground extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <h4>Do you have a background in IT or security?</h4>
          <BackgroundButtons
            onYesClick={this.props.onYesClick}
            onNoClick={this.props.onNoClick}
          />
        </AppBody>
      </AppContainer>
    );
  }
}

ITBackground.propTypes = {
  onYesClick: PropTypes.func,
  onNoClick: PropTypes.func
};

export default ITBackground;