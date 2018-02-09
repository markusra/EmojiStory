import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

class SurveyBody extends Component {
  render() {
    return (
      <div className={"survey-body"}>
         {this.props.children}
      </div>
    );
  }
}

SurveyBody.propTypes = {
  children: PropTypes.any
};

export default SurveyBody;
