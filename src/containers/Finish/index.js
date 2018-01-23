import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import SocialButtons from "../../components/SocialButtons/index";

class Finish extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey Finished!">
        <AppBody>
          <p>
            You finished the survey and your answers are send to us. Thank you!
          </p>
        </AppBody>

        <AppFooter>
          <SocialButtons />
        </AppFooter>
      </AppContainer>
    );
  }
}

export default Finish;
