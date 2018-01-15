import React, { Component } from "react";
import firebase from "../../firebase";
import AppContainer from "../../components/AppContainer";
import "./Finish.css";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";

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
          <div className="row justify-content-center">
            <b>Share the survey</b>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://emoji.rauhut.no/"
                className="btn-social btn-facebook"
              >
                <i className="fa fa-facebook" />
              </a>

              <a
                href="https://plus.google.com/share?url=https://emoji.rauhut.no/"
                className="btn-social btn-google-plus"
              >
                <i className="fa fa-google-plus" />
              </a>

              <a
                href="https://twitter.com/home?status=Can%20emojis%20replace%20passwords?%20Take%20this%20survey%20to%20help%20the%20research%20on%20emoji-based%20authentication!%20Go%20to%20emoji.rauhut.no!"
                className="btn-social btn-twitter"
              >
                <i className="fa fa-twitter" />
              </a>
            </div>
            <div className="col">
              <a href="https://emoji.rauhut.no" className="btn-social btn-reddit">
                <i className="fa fa-reddit" />
              </a>

              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//emoji.rauhut.no/&title=Emoji-Based%20Authentication&summary=&source="
                className="btn-social btn-linkedin"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                href="mailto:?subject=Emoji-Based Authentication&amp;body=Check out this site https://emoji.rauhut.no/."
                className="btn-social btn-email"
              >
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
        </AppFooter>
      </AppContainer>
    );
  }
}

export default Finish;
