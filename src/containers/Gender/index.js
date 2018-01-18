import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import GenderButtons from "../../components/GenderButtons/index";

class Gender extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <h4>
            What is your gender?
          </h4>
          <GenderButtons />
        </AppBody>

      </AppContainer>
    );
  }
}

export default Gender;
