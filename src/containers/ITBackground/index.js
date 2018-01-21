import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import BackgroundButtons from "../../components/ITBackgroundButtons/index";

class Gender extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <h4>
            Do you have a background in IT or security?
          </h4>
          <BackgroundButtons />
        </AppBody>

      </AppContainer>
    );
  }
}


export default Gender;
