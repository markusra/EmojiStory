import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

// Import Bootstrap Components
import { Button } from "reactstrap";

// Connect to Redux store
import { connect } from "react-redux";

let strings = {
  en: {
    enterStoryFirstTry: "Please enter your emoji-password",
    enterStorySecondTry: "Please try to enter your emoji-password one last time"
  },
  no: {
    enterStoryFirstTry: "Skriv inn ditt emoji-passord",
    enterStorySecondTry: "Prøv å skrive inn ditt emoji-passord en siste gang"
  },
  de: {
    enterStoryFirstTry: "Gib dein Emoji-Passwort ein",
    enterStorySecondTry: "Versuche dein Emoji-Password ein letztes Mal einzugeben"
  }
};

class LoginOverlay2 extends Component {
  render() {
    const visible = this.props.visible ? "fade-in" : "fade-out";
    const is2ndAttempt = this.props.readyFor2ndLogin;
    const text = is2ndAttempt ? strings[this.props.language].enterStorySecondTry : strings[this.props.language].enterStoryFirstTry;

    const OverlayButton =
        <Button
          className="okButton"
          color="primary"
          size="lg"
          onClick={this.props.onOkButtonClick}
          // block
        >
          Ok
        </Button>



    return (
      <div className={"login-overlay2 " + visible}>
        <div className="container login-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 className="result">{text}</h3>
              <div className="okButtonContainer">{OverlayButton}</div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    readyFor2ndLogin: state.readyFor2ndLogin,
    language: state.language
  };
};

LoginOverlay2.propTypes = {
  visible: PropTypes.bool,
  onOkButtonClick: PropTypes.func,
  readyFor2ndLogin: PropTypes.bool,
  language: PropTypes.string
};

export default connect(mapStateToProps)(LoginOverlay2);
