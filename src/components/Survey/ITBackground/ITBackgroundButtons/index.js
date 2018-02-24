import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./index.css";

import { connect } from "react-redux";
import { setItBackground } from "../../../../actions/index";

let strings = {
  en: {
    yes: "Yes",
    no: "No"
  },
  no: {
    yes: "Ja",
    no: "Nei"
  },
  de: {
    yes: "Ja",
    no: "Nein"
  }
};

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
          {strings[this.props.language].yes}
        </Button>

        <Button
          className="surveyAnswerButton no"
          size="lg"
          onClick={() => {
            this.props.setItBackground("No", "emojiUsage");
          }}
        >
          {strings[this.props.language].no}
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    itBackground: state.itBackground,
    surveyPage: state.surveyPage,
    language: state.language
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
  setItBackground: PropTypes.func,
  language: PropTypes.string
};



export default connect(mapStateToProps, mapDispatchToProps)(ITBackgroundButtons);

