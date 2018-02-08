import React, { Component, Fragment } from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

class GenderButtons extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="p-2">
          <h3>What is your gender?</h3>
        </div>
        <div className="d-flex flex-row">
          <div className="p-2">
            <div
              onClick={() => {
                this.props.setGender("female");
              }}
            >
              <i
                className="fa fa-female female-styling pointer"
                aria-hidden="true"
              />
            </div>
            <div
              onClick={() => {
                this.props.setGender("male");
              }}
            >
              <i
                className="fa fa-male male-styling pointer"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div className="p-2">
          <Button
            size="sm"
            style={{ color: "white", backgroundColor: "#1b212c" }}
            onClick={() => {
              this.props.setGender("other");
            }}
          >
            Other
          </Button>
        </div>
      </div>
    );
  }
}

GenderButtons.propTypes = {
  setGender: PropTypes.func
};

export default GenderButtons;
