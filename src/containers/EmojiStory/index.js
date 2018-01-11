import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";

// Import Bootstrap Components
import { Button } from "reactstrap";

class Welcome extends Component {
  render() {
    return (
      <AppContainer appTitle="EmojiStory">
        <p>
          This is so awesome! :-D
        </p>

        <Button color="success" className="col" href="/finish">
          Cool
        </Button>
      </AppContainer>
    );
  }
}

export default Welcome;
