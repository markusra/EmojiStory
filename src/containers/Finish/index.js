import React, { Component, Fragment } from "react";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import SocialButtons from "../../components/SocialButtons/index";
import PropTypes from "prop-types";
import { redirectUser } from "../../services/redirectUser";

// Connect to Redux store
import { connect } from "react-redux";

import { timestampUpdateDB } from "../../services/databaseFunctions";
import { calculateTimeUsed } from "../../services/timestamping";

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
          du har spørsmål eller kommentarer, vennligst kontakt oss. Hvis du
          ønsker å hjelpe oss enda mer med forskningen vår, vennligst del denne
          undersøkelsen:
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
    // Calculate time spent on logging in the second time and send it to DB
    const timeUsed = calculateTimeUsed(
      this.props.timestamp1,
      this.props.timestamp2
    );
    timestampUpdateDB("timestamp5", timeUsed, this.props.loginAttempts);
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
    timestamp1: state.timestamp1,
    timestamp2: state.timestamp2,
    loginAttempts: state.loginAttempts,
    language: state.language
  };
};

Finish.propTypes = {
  userProgress: PropTypes.string,
  timestamp1: PropTypes.number,
  timestamp2: PropTypes.number,
  loginAttempts: PropTypes.number,
  language: PropTypes.string
};

export default connect(mapStateToProps)(Finish);
