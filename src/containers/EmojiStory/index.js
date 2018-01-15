import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";

// Import Bootstrap Components
import { Button } from "reactstrap";

class Welcome extends Component {
  render() {
    return (
      <AppContainer appTitle="EmojiStory">
        <AppBody>
          <p>This is so awesome! :-D</p>
        </AppBody>
        <AppFooter>
          <Button color="success" className="col" href="/finish">
            Cool
          </Button>
        </AppFooter>
      </AppContainer>
    );
  }
}

export default Welcome;
