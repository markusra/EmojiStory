import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.css";

class SurveyBody extends Component {
  render() {
    var progressValue;
    switch (this.props.surveyPage) {
      case "strategy":
        progressValue = "12.5%";
        break;
      case "memorization":
        progressValue = "25%";
        break;
      case "confusion":
        progressValue = "37.5%";
        break;
      case "fun":
        progressValue = "50%";
        break;
      case "emojiUsage":
        progressValue = "62.5%";
        break;
      case "itBackground":
        progressValue = "75%";
        break;
      case "gender":
        progressValue = "87.5%";
        break;
      case "questions":
        progressValue = "100%";
        break;
      default:
        progressValue = "0%";
    }
    return (
      <div className={"survey-body"}>
        <div className="surveyContainer">
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: progressValue }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    surveyPage: state.surveyPage
  };
};

SurveyBody.propTypes = {
  children: PropTypes.any,
  surveyPage: PropTypes.string
};

export default connect(mapStateToProps)(SurveyBody);