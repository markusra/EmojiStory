import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";

class Welcome extends Component {
  render() {
    return (
      <AppContainer appTitle="EmojiStory">
        <AppBody>
          <p>This is so awesome! :-D</p>
        </AppBody>
      </AppContainer>
    );
  }
}

export default Welcome;
