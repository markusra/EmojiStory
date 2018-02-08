import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

// Import Bootstrap Components
import { Button } from "reactstrap";

class LoginOverlay extends Component {
  render() {
    const visible = this.props.visible ? "fade-in" : "fade-out";

    const isCorrect = this.props.isCorrect;

    const text = isCorrect ? "Correct password!" : "Wrong password!";
    const icon = isCorrect ? "correct fa fa-check" : "wrong fa fa-times";

    const OverlayButton =
      isCorrect || this.props.attemptsLeft === 0 ? (
        <Button
          color="primary"
          size="lg"
          onClick={this.props.onContinueButtonClick}
          block
        >
          Continue
        </Button>
      ) : (
        <Button
          color="primary"
          size="lg"
          onClick={this.props.onTryAgainButtonClick}
          block
        >
          Try again
        </Button>
      );

    return (
      <div className={"login-overlay " + visible}>
        <div className="container login-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 className="result">{text}</h3>
              <i className={"loginIcon " + icon} aria-hidden="true" />
              <h5 className="answer">{this.props.attemptsLeft + " attempt(s) left"}</h5>
            </div>
          </div>
          <div className="footer">{OverlayButton}</div>
        </div>
      </div>
    );
  }
}

LoginOverlay.propTypes = {
  visible: PropTypes.bool,
  isCorrect: PropTypes.bool,
  attemptsLeft: PropTypes.number,
  onTryAgainButtonClick: PropTypes.func,
  onContinueButtonClick: PropTypes.func
};

export default LoginOverlay;
