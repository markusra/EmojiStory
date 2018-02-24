import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

// Import Bootstrap Components
import { Button } from "reactstrap";
// Connect to Redux store
import { connect } from "react-redux";

let strings = {
  en: {
    continue: "Continue",
    tryAgain: "Try again",
    attemptsLeft: " attempt(s) left",
    wrongPassword: "Wrong password!",
    correctPassword: "Correct password!"
  },
  no: {
    continue: "Fortsett",
    tryAgain: "Prøv igjen",
    attemptsLeft: " forsøk igjen",
    wrongPassword: "Feil passord!",
    correctPassword: "Riktig passord!"
  },
  de: {
    continue: "Fortfahren",
    tryAgain: "Versuche es erneut",
    attemptsLeft: " Versuch(e) übrig",
    wrongPassword: "Falsches Passwort!",
    correctPassword: "Richtiges Passwort!"
  }
};

class LoginOverlay extends Component {
  render() {
    const visible = this.props.visible ? "fade-in" : "fade-out";

    const isCorrect = this.props.isCorrect;

    const text = isCorrect
      ? strings[this.props.language].correctPassword
      : strings[this.props.language].wrongPassword;
    const icon = isCorrect ? "correct fa fa-check" : "wrong fa fa-times";

    const OverlayButton =
      isCorrect || this.props.attemptsLeft === 0 ? (
        <Button
          color="primary"
          size="lg"
          onClick={this.props.onContinueButtonClick}
          block
        >
          {strings[this.props.language].continue}
        </Button>
      ) : (
        <Button
          color="primary"
          size="lg"
          onClick={this.props.onTryAgainButtonClick}
          block
        >
          {strings[this.props.language].tryAgain}
        </Button>
      );

    return (
      <div className={"login-overlay " + visible}>
        <div className="container login-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 className="result">{text}</h3>
              <i className={"loginIcon " + icon} aria-hidden="true" />
              <h5 className="answer">
                {this.props.attemptsLeft +
                  strings[this.props.language].attemptsLeft}
              </h5>
            </div>
          </div>
          <div className="footer">{OverlayButton}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

LoginOverlay.propTypes = {
  visible: PropTypes.bool,
  isCorrect: PropTypes.bool,
  attemptsLeft: PropTypes.number,
  onTryAgainButtonClick: PropTypes.func,
  onContinueButtonClick: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps)(LoginOverlay);
