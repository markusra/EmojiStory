import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import GenderButtons from "../../components/GenderButtons/index";
import PropTypes from "prop-types";

class Gender extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <h4>What is your gender?</h4>
          <GenderButtons
            onFemaleClick={this.props.onFemaleClick}
            onMaleClick={this.props.onMaleClick}
          />
        </AppBody>
      </AppContainer>
    );
  }
}

Gender.propTypes = {
  onFemaleClick: PropTypes.func,
  onMaleClick: PropTypes.func
};

export default Gender;
