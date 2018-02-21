import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./index.css";

import { connect } from "react-redux";
import { setItBackground } from "../../../../actions/index";


class ITBackgroundButtons extends Component {
  render() {
    return (
      <Fragment>
        <Button
          className="surveyAnswerButton yes"
          size="lg"
          onClick={() => {
            this.props.setItBackground("Yes", "emojiUsage");
          }}
        >
          Yes
        </Button>

        <Button
          className="surveyAnswerButton no"
          size="lg"
          onClick={() => {
            this.props.setItBackground("No", "emojiUsage");
          }}
        >
          No
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    itBackground: state.itBackground,
    surveyPage: state.surveyPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setItBackground: (itBackground, surveyPage) => {
      dispatch(setItBackground(itBackground, surveyPage));
    }
  };
};

ITBackgroundButtons.propTypes = {
  setItBackground: PropTypes.func
};



export default connect(mapStateToProps, mapDispatchToProps)(ITBackgroundButtons);

