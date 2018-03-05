import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./index.css";
import { connect } from "react-redux";
import { setGender } from "../../../../actions/index";

let strings = {
  en: {
    other: "Other"
  },
  no: {
    other: "Annet"
  },
  de: {
    other: "Anderes"
  }
};

class GenderButtons extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-center">
          <div className="p-2">
            <div
              onClick={() => {
                this.props.setGender("female", "itBackground");
              }}
            >
              <i
                className="fa fa-female gender-styling pointer"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="p-2">
            <div
              onClick={() => {
                this.props.setGender("male", "itBackground");
              }}
            >
              <i
                className="fa fa-male gender-styling pointer"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div className="p-2 text-center">
          <Button
            size="lg"
            color="link"
            style={{ color: "#1b212c", marginTop: "15px" }}
            onClick={() => {
              this.props.setGender("other", "itBackground");
            }}
          >
            {strings[this.props.language].other}
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setGender: (gender, surveyPage) => {
      dispatch(setGender(gender, surveyPage));
    }
  };
};

GenderButtons.propTypes = {
  setGender: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(GenderButtons);

