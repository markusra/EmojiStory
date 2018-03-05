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
          Thank you for participating! Your answers have been sendt to us. If
          you have any questions or comments, please contact (link på contact?)
          us at [EMAIL]. If you would like to help us even more with our
          research, please share this survey:
        </p>
      </Fragment>
    )
  },
  no: {
    finishText: (
      <Fragment>
        <p>
          Tusen takk for at du deltok! Svarene dine har blitt sent til oss. Hvis
          du har spørsmål eller kommentarer, vennligst{" "}
          <a href="mailto:questions@emojistory.site" target="_top">
            kontakt
          </a>{" "}
          oss. Hvis du ønsker å hjelpe oss ytterligere med denne forskningen,
          vennligst del denne undersøkelsen:
        </p>
      </Fragment>
    )
  },
  de: {
    finishText: ""
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
      timestampUpdateDB("timestamp5", timeUsed, 3 - this.props.attemptsLeft);
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
    attemptsLeft: state.attemptsLeft
  };
};

Finish.propTypes = {
  userProgress: PropTypes.string,
  language: PropTypes.string,
  timestamp1: PropTypes.number,
  timestamp2: PropTypes.number,
  attemptsLeft: PropTypes.number
};

export default connect(mapStateToProps)(Finish);
