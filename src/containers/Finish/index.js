import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import SocialButtons from "../../components/SocialButtons/index";
import { connect } from "react-redux";
import { redirectUser } from "../../services/redirectUser";
import { calculateTimeUsed } from "../../services/timestamping";
import { timestampUpdateDB } from "../../services/databaseFunctions";

let strings = {
  en: {
    finishText: (
      <Fragment>
        <p>
          Thank you for participating! If you have any questions or comments,
          please{" "}
          <a href="mailto:mail@emojistory.site?subject=Survey on Emoji Passwords" target="_top">
            send us an email
          </a>. We would appreciate if you could take a moment to share our
          survey (see below).
        </p>
      </Fragment>
    )
  },
  no: {
    finishText: (
      <Fragment>
        <p>
          Tusen takk for at du tok undersøkelsen! Hvis du har spørsmål eller
          kommentarer, vennligst{" "}
          <a href="mailto:mail@emojistory.site?subject=Survey on Emoji Passwords" target="_top">
            send oss en e-post
          </a>. Hvis du ønsker å hjelpe oss ytterligere med forskningen vår,
          vennligst del undersøkelsen vår (se under).
        </p>
      </Fragment>
    )
  },
  de: {
    finishText: (
      <Fragment>
        <p>
          Vielen Dank, dass du an unserer Umfrage teilgenommen hast! Solltest du
          Fragen oder Kommentare haben, dann{" "}
          <a href="mailto:mail@emojistory.site?subject=Survey on Emoji Passwords" target="_top">
            schicke uns eine Mail
          </a>. Wenn du uns noch mehr helfen möchtest, kannst du unsere Umfrage
          in deinem Netzwerk teilen (siehe unten).
        </p>
      </Fragment>
    )
  }
};

class Finish extends Component {
  componentWillMount() {
    redirectUser(this.props.userProgress);
    if (this.props.userProgress === "/finish") {
      const timeUsed = calculateTimeUsed(
        this.props.timestamp1,
        this.props.timestamp2
      );
      timestampUpdateDB("timestamp5", timeUsed, 3 - this.props.attemptsLeft, this.props.correctPassword);
    }
  }

  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>{strings[this.props.language].finishText}</AppBody>
        <AppFooter>
          <SocialButtons />
        </AppFooter>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress,
    language: state.language,
    timestamp1: state.timestamp1,
    timestamp2: state.timestamp2,
    attemptsLeft: state.attemptsLeft,
    correctPassword: state.correctPassword
  };
};

Finish.propTypes = {
  userProgress: PropTypes.string,
  language: PropTypes.string,
  timestamp1: PropTypes.number,
  timestamp2: PropTypes.number,
  attemptsLeft: PropTypes.number,
  correctPassword: PropTypes.string
};

export default connect(mapStateToProps)(Finish);
