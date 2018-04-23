import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setLanguage } from "../actions/index";
import { Button } from "reactstrap";
import html2canvas from "html2canvas";

class AppContainer extends Component {
  html2canvasFunction() {
    html2canvas(document.querySelector(".emoji-container")).then(canvas => {
      var a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "somefilename.png";
      a.click();
    });
  }

  render() {
    return (
      <Fragment>
        <div className={"container app-container"}>
          <nav className={"navbar app-header sticky-top"}>
            <h1 className={"navbar-brand mb-0 app-title"}>
              Survey on Emoji Passwords
            </h1>
          </nav>
          {this.props.children}
        </div>
        <div className="languageLinks">
          <div style={{ flex: 1 }}>
            <a
              onClick={e => {
                e.preventDefault();
                this.props.setLanguage("en");
              }}
            >
              English
            </a>
          </div>
          <div style={{ flex: 1 }}>
            <a
              onClick={e => {
                e.preventDefault();
                this.props.setLanguage("no");
              }}
            >
              Norsk
            </a>
          </div>
          <div style={{ flex: 1 }}>
            <a
              onClick={e => {
                e.preventDefault();
                this.props.setLanguage("de");
              }}
            >
              Deutsch
            </a>
          </div>
        </div>
        <div align="center">
          <Button
            size="lg"
            style={{ marginTop: "15px" }}
            color="warning"
            onClick={() => this.html2canvasFunction()}
          >
            Take screenshot
          </Button>
        </div>
      </Fragment>
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
    setLanguage: language => {
      dispatch(setLanguage(language));
    }
  };
};

AppContainer.propTypes = {
  appTitle: PropTypes.string,
  appStyle: PropTypes.string,
  setLanguage: PropTypes.func,
  children: PropTypes.any
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
