import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

// Import Bootstrap Components
import { Button } from "reactstrap";

// Connect to Redux store
import { connect } from "react-redux";

class LoginInfoOverlay extends Component {
  render() {
    const visible = this.props.visible ? "fade-in" : "fade-out";
    const is2ndAttempt = this.props.readyFor2ndLogin;
    const infoText = is2ndAttempt
      ? "Please try to enter your emoji-password one last time"
      : "Please enter your emoji-password";

    const OverlayButton = (
      <Button
        color="primary"
        size="lg"
        onClick={this.props.onOkButtonClick}
        block
      >
        Ok
      </Button>
    );

    return (
      <div className={"login-overlay2 " + visible}>
        <div className="container login-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h2 className="result">{infoText}</h2>
            </div>
          </div>
          <div className="footer">
            <div className="row">
              <div className="col-12">
               {OverlayButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    readyFor2ndLogin: state.readyFor2ndLogin
  };
};

LoginInfoOverlay.propTypes = {
  visible: PropTypes.bool,
  onOkButtonClick: PropTypes.func,
  readyFor2ndLogin: PropTypes.bool
};

export default connect(mapStateToProps)(LoginInfoOverlay);
