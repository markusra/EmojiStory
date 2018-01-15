import React, { Component } from "react";
import firebase from "../../firebase";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import SocialButtons from "../../components/SocialButtons/index";

class Finish extends Component {
  render() {
    var database = firebase.database();

    const personsRef = database.ref("persons");
    const person = {
      username: "Test",
      email: "email"
    };

    personsRef.push(person);

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
