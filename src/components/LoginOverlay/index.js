import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
// import ButtonBar from "../../ButtonBar/index";

// Import Bootstrap Components
import { Button } from "reactstrap";

/*eslint no-undef: 0*/
class LoginOverlay extends Component {
  render() {
    const visible = this.props.visible
      ? "fade-in-with-delay"
      : "fade-out-with-delay";

    const attemptsLeft = this.props.attemptsLeft;
    const text = this.props.isCorrect ? "Correct password!" : "Wrong password!";
    const icon = this.props.isCorrect
      ? "correct fa fa-check"
      : "wrong fa fa-times";

    const OverlayButton =
      this.props.isCorrect || this.props.attemptsLeft === 0 ? (
        <Button color="primary" size="lg" onClick={this.props.onContinueButtonClick} block>
          Continue
        </Button>
      ) : (
        <Button color="primary" size="lg" onClick={this.props.onTryAgainButtonClick} block>
          Try again
        </Button>
      );

    return (
      <div className={"login-overlay " + visible}>
        <div className="container emoji-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 className="result">{text}</h3>
              <i className={"loginIcon " + icon} aria-hidden="true" />
              {this.props.isCorrect ? null : (
                <h5 className="attempts">{attemptsLeft} attempts left</h5>
              )}
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
