import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import OrientationOverlay from "./OrientationOverlay/index";
import { checkDeviceType } from "../services/checkDeviceType";
import { connect } from "react-redux";
import { setLanguage } from "../actions/index";

class AppContainer extends Component {
  render() {
    const device = checkDeviceType();
    return (
      <Fragment>
        {device === "mobile" ? <OrientationOverlay /> : null}

        <div className={"container app-container"}>
          <nav className={"navbar app-header sticky-top"}>
            <h1 className={"navbar-brand mb-0 app-title"}>
              {this.props.appTitle}
            </h1>
          </nav>
          {this.props.children}
        </div>
        <div
          style={{
            width: "250px",
            margin: "0 auto",
            flexDirection: "row",
            display: "flex",
            textAlign: "center",
            fontSize: 14,
            color: "grey",
            marginTop: 5
          }}
          className="languageLinks"
        >
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
                this.props.setLanguage("de");
              }}
            >
              Deutsch
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
