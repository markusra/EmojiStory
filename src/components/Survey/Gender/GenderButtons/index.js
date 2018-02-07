import React, { Component, Fragment } from "react";
import "./index.css";
import PropTypes from "prop-types";

class GenderButtons extends Component {
  

  render() {
    return (
      <Fragment>
        <div className="row justify-content-center">
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
            <i className="fa fa-male male-styling pointer" aria-hidden="true" />
          </div>
        </div>
      </Fragment>
    );
  }
}

GenderButtons.propTypes = {
  setGender: PropTypes.func
};

export default GenderButtons;
