import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import { Button } from "reactstrap";
import history from "../../history";
import { connect } from "react-redux";
import {
  setUserProgress,
  deleteAnswers,
  deleteAnswerIndices,
  setDeviceType,
  setLanguage
} from "../../actions/index";
import { createDBEntry } from "../../services/databaseFunctions";
import { checkDeviceType } from "../../services/checkDeviceType";
import { redirectUser } from "../../services/redirectUser";
var locale = require("browser-locale")();

let strings = {
  en: {
    welcomeText: (
      <Fragment>
        <p>
          This survey is created by Martin Kjellevand and Markus Rauhut in order
          to research the <b>usability</b> and <b>security</b> of emoji-based
          authentication. The data from this survey is collected for a master
          thesis conducted at the{" "}
          <b>Norwegian University of Science and Technology</b>.
        </p>

        <p>
          The survey is anonymous and you will not be asked for any personal
          information. If you have any questions concerning the project, please{" "}
          <a href="mailto:mail@emojistory.site" target="_top">
            contact
          </a>{" "}
          us. The study has been notified to the Data Protection Official for
          Research (Norwegian Centre for Research Data)
        </p>
      </Fragment>
    ),
    startSurveyText: "Start the survey"
  },
  no: {
    welcomeText: (
      <Fragment>
        <p>
          Denne undersøkelsen er laget av Martin Kjellevand og Markus Rauhut for
          å kartlegge <b>brukervennligheten</b> og <b>sikkerheten</b> til
          emoji-passord. Undersøkelsen tar 3-4 minutter. Dataen som blir samlet
          inn vil bli brukt i en masteroppgave på{" "}
          <b>Norges teknisk-naturvitenskapelige universitet (NTNU)</b>.
        </p>

        <p>
          Undersøkelsen er anonym og du vil ikke bli bedt om noe personlig
          informasjon. Om du skulle ha spørsmål om prosjektet, vennligst{" "}
          <a href="mailto:mail@emojistory.site" target="_top">
            kontakt
          </a>{" "}
          oss. Undersøkelsen har blitt meldt til Norsk senter for forskningsdata
          (NSD).
        </p>
      </Fragment>
    ),
    startSurveyText: "Start undersøkelsen"
  },
  de: {
    welcomeText: "",
    startSurveyText: ""
  }
};

// TODO: Fix email address
class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      willRedirect: redirectUser(this.props.userProgress)
    };
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

  onButtonClick() {
    const device = checkDeviceType();
    this.props.setDeviceType(device);

    this.props.deleteAnswers();
    this.props.deleteAnswerIndices();

    createDBEntry();

    const url = "/emojiStory";
    this.props.setUserProgress(url);
    history.push(url);
  }

  render() {
    return (
      <Fragment>
        {this.state.willRedirect ? null : (
          <AppContainer appTitle="Survey – Emoji-Based Authentication">
            <AppBody>{strings[this.props.language].welcomeText}</AppBody>

            <AppFooter>
              <Button
                color="success"
                size="lg"
                onClick={() => this.onButtonClick()}
                block
              >
                {strings[this.props.language].startSurveyText}
              </Button>
            </AppFooter>
          </AppContainer>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserProgress: userProgress => {
      dispatch(setUserProgress(userProgress));
    },
    deleteAnswers: userStory => {
      dispatch(deleteAnswers(userStory));
    },
    deleteAnswerIndices: userStory => {
      dispatch(deleteAnswerIndices(userStory));
    },
    setDeviceType: deviceType => {
      dispatch(setDeviceType(deviceType));
    },
    setLanguage: language => {
      dispatch(setLanguage(language));
    }
  };
};

Welcome.propTypes = {
  setUserProgress: PropTypes.func,
  deleteAnswers: PropTypes.func,
  userProgress: PropTypes.string,
  deleteAnswerIndices: PropTypes.func,
  setDeviceType: PropTypes.func,
  language: PropTypes.string,
  setLanguage: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
