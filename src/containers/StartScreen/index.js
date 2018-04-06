import React, { Component, Fragment } from "react";
import "./index.css";
import PropTypes from "prop-types";
import history from "../../history";

import { connect } from "react-redux";
import { Button } from "reactstrap";
import { setLanguage } from "../../actions/index";

var locale = require("browser-locale")();

let strings = {
  en: {
    question: "Do you want to create an emoji password?",
    info: (
      <Fragment>
        This is just for fun. <br />You cannot use the password you create.
      </Fragment>
    ),
    yes: "Yes"
  },
  no: {
    question: "Vil du lage et emoji-passord?",
    info: (
      <Fragment>
        Dette er bare for moro skyld. <br />Du kan ikke bruke passordet du har
        lagd.
      </Fragment>
    ),
    yes: "Ja"
  },
  de: {
    question: "Möchtest du ein Emoji-Passwort erstellen?",
    info: (
      <Fragment>
        Dies ist nur zum Spaß. <br />Du kannst das Passwort leider nicht
        benutzen.
      </Fragment>
    ),
    yes: "Ja"
  }
};

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.detectLanguage();
  }

  detectLanguage() {
    var browserLanguage = locale;
    browserLanguage = browserLanguage.toLowerCase();
    if (
      browserLanguage.includes("nb") ||
      browserLanguage.includes("no") ||
      browserLanguage.includes("nn")
    ) {
      this.props.setLanguage("no");
    } else if (browserLanguage.includes("de")) {
      this.props.setLanguage("de");
    } else {
      this.props.setLanguage("en");
    }
  }

  startEmojiStory() {
    const url = "/emojiStory";
    history.push(url);
  }

  render() {
    return (
      <Fragment>
        <div className="flex-container">
          <div id="startContainer">
            <div className="flex-item">
              <h1>{strings[this.props.language].question}</h1>
            </div>
            <div className="flex-item">
              <p>{strings[this.props.language].info}</p>
            </div>
            <div className="flex-item">
              <Button
                id="goButton"
                color="success"
                size="lg"
                onClick={this.startEmojiStory}
                block
              >
                {strings[this.props.language].yes}
              </Button>
            </div>
          </div>
        </div>
        <p className="attributionMobile">
          Emoji artwork is provided by{" "}
          <a
            href="https://www.emojione.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            EmojiOne
          </a>{" "}
          and is licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/legalcode"
            rel="noopener noreferrer"
            target="_blank"
          >
            CC-BY 4.0
          </a>
        </p>
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

StartScreen.propTypes = {
  language: PropTypes.string,
  setLanguage: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
