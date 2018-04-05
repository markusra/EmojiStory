import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import { connect } from "react-redux";

let strings = {
  en: {
    finishText: (
      <Fragment>
        <p>
          If you have any questions or comments, please{" "}
          <a
            href="mailto:mail@emojistory.site?subject=Survey on Emoji Passwords"
            target="_top"
          >
            send us an email
          </a>.
        </p>
      </Fragment>
    )
  },
  no: {
    finishText: (
      <Fragment>
        <p>
          Hvis du har spørsmål eller kommentarer, vennligst{" "}
          <a
            href="mailto:mail@emojistory.site?subject=Survey on Emoji Passwords"
            target="_top"
          >
            send oss en e-post
          </a>.
        </p>
      </Fragment>
    )
  },
  de: {
    finishText: (
      <Fragment>
        <p>
          Solltest du Fragen oder Kommentare haben, dann{" "}
          <a
            href="mailto:mail@emojistory.site?subject=Survey on Emoji Passwords"
            target="_top"
          >
            schicke uns bitte eine Mail
          </a>.
        </p>
      </Fragment>
    )
  }
};

class Finish extends Component {
  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>{strings[this.props.language].finishText}</AppBody>
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
