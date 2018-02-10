import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

// Import Bootstrap Components
import { Button } from "reactstrap";

// Connect to Redux store
import { connect } from "react-redux";

class LoginOverlay2 extends Component {
  render() {
    const visible = this.props.visible ? "fade-in" : "fade-out";
    const is2ndAttempt = this.props.readyFor2ndLogin;
    const text = is2ndAttempt ? "Please try to enter your emoji-password one last time." : "Please enter your emoji-password.";

    const OverlayButton =
        <Button
          color="primary"
          size="lg"
          onClick={this.props.onOkButtonClick}
          block
        >
          OK
        </Button>

    return (
      <div className={"login-overlay2 " + visible}>
        <div className="container login-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 className="result">{text}</h3>
              <div className="buttonStyle">{OverlayButton}</div>
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

LoginOverlay2.propTypes = {
  visible: PropTypes.bool,
  onOkButtonClick: PropTypes.func,
  readyFor2ndLogin: PropTypes.bool
};

export default connect(mapStateToProps)(LoginOverlay2);
