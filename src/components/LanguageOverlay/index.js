import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { setLanguage } from "../../actions/index";

let strings = {
  en: {
    firstInfo: "Please select your preferred language"
  },
  no: {
    firstInfo: "Vennligst velg ditt foretrukne språk"
  },
  de: {
    firstInfo: ""
  }
};

class LanguageOverlay extends Component {
  render() {
    const visible = this.props.languageOverlay ? "fade-in" : "fade-out";

    return (
      <div className={"login-overlay2 " + visible}>
        <div className="container login-overlay-container text-center">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 className="result">
                {strings[this.props.language].firstInfo}
              </h3>
            </div>
          </div>
          <div className="footer">
            <div className="row">
              <div className="col-12">
                <Button
                  color="success"
                  size="lg"
                  onClick={() => this.props.setLanguage("en")}
                  block
                >
                  English
                </Button>
                <Button
                  color="success"
                  size="lg"
                  onClick={() => this.props.setLanguage("no")}
                  block
                >
                  Norwegian
                </Button>
                <Button
                  color="success"
                  size="lg"
                  onClick={() => this.props.setLanguage("de")}
                  block
                >
                  German
                </Button>
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
    language: state.language,
    languageOverlay: state.languageOverlay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: language => {
      dispatch(setLanguage(language));
    }
  };
};

LanguageOverlay.propTypes = {
  visible: PropTypes.bool,
  onOkButtonClick: PropTypes.func,
  readyFor2ndLogin: PropTypes.bool,
  language: PropTypes.string,
  setLanguage: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageOverlay);
