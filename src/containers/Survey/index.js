import React, { Component } from "react";
import { Button } from "reactstrap";
import Questionnaire from "../../components/Questionnaire";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";

class Survey extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <Questionnaire
            ref={instance => {
              this.child = instance;
            }}
          />
        </AppBody>
        <AppFooter>
          <Button
            color="success"
            className="col"
            onClick={() => {
              this.child.handleSubmit();
            }}
          >
            Submit
          </Button>
        </AppFooter>
      </AppContainer>
    );
  }
}

export default Survey;
