import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import "./index.css";
import PropTypes from "prop-types";

class ITBackgroundButtons extends Component {
  render() {
    return (
      <Fragment>
        <Button
          className="surveyAnswerButton yes"
          size="lg"
          onClick={() => {
            this.props.setITBackground("Yes");
          }}
        >
          Yes
        </Button>

        <Button
          className="surveyAnswerButton no"
          size="lg"
          onClick={() => {
            this.props.setITBackground("No");
          }}
        >
          No
        </Button>
      </Fragment>
    );
  }
}

ITBackgroundButtons.propTypes = {
  setITBackground: PropTypes.func
};

export default ITBackgroundButtons;
