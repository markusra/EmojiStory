import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import LanguageOverlay from "../../components/LanguageOverlay";
import { Button } from "reactstrap";
import history from "../../history";
import { connect } from "react-redux";
import {
  setUserProgress,
  deleteAnswers,
  deleteAnswerIndices,
  setDeviceType,
  setLanguage,
  setLanguageOverlay
} from "../../actions/index";
import { createDBEntry } from "../../services/databaseFunctions";
import { checkDeviceType } from "../../services/checkDeviceType";
import { redirectUser } from "../../services/redirectUser";
import "./index.css";
import ukFlag from "../../images/1f1ec-1f1e7.svg";
import germanFlag from "../../images/1f1e9-1f1ea.svg";
import norwegianFlag from "../../images/1f1e7-1f1fb.svg";

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
          information. If you have any questions concerning the project, please
          contact us at [email address]. The study has been notified to the Data
          Protection Official for Research, NSD - Norwegian Centre for Research
          Data.
        </p>
      </Fragment>
    ),
    startSurveyText: "Start the survey",
    languageText: <p>Please select your preferred language:</p>
  },
  no: {
    welcomeText: (
      <Fragment>
        <p>
          Denne undersøkelsen er laget av Martin Kjellevand og Markus Rauhut for
          å kartlegge <b>brukervennligheten</b> og <b>sikkerheten</b> til
          emoji-basert autentisering. Dataen som blir samlet inn fra denne
          undersøkelsen blir brukt i en masteroppgave på{" "}
          <b>Norges teknisk-naturvitenskapelige universitet (NTNU)</b>.
        </p>

        <p>
          Undersøkelsen er anonym og du vil ikke bli bedt om noe personlig
          informasjon. Om du skulle ha noen spørsmål om prosjektet, kontakt
          (link på kontakt?) oss på [e-post adresse]. Undersøkelsen har blitt
          meldt til Norsk senter for forskningsdata (NSD).
        </p>
      </Fragment>
    ),
    startSurveyText: "Start undersøkelsen",
    languageText: <p>Velg språk:</p>
  },
  de: {
    welcomeText: "",
    startSurveyText: "",
    languageText: <p />
  }
};

// TODO: Fix email address
class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      willRedirect: redirectUser(this.props.userProgress),
      languageOverlay: false
    };

    var browserLanguage =
      navigator.languages[0] || navigator.language || navigator.userLanguage;
    // All current browsers and IE >= 11 support navigator.language
    // navigator.userLanguage is for IE browsers lower than version 11

    if (
      browserLanguage === "nb" ||
      browserLanguage === "no" ||
      browserLanguage === "nn" ||
      browserLanguage === "nb-NO" ||
      browserLanguage === "nn-NO"
    ) {
      this.props.setLanguage("no");
    } else if (browserLanguage === "de" || browserLanguage === "de-de") {
      this.props.setLanguage("de");
    } else {
      this.props.setLanguage("en");
      // this.props.setLanguageOverlay();
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
            <LanguageOverlay visible={this.state.languageOverlay} />

            <AppBody>
              {strings[this.props.language].welcomeText}

              {strings[this.props.language].languageText}

              <img
                src={ukFlag}
                alt="English"
                className="flagStyle"
                onClick={() => this.props.setLanguage("en")}
              />
              <img
                src={germanFlag}
                alt="German"
                className="flagStyle"
                onClick={() => this.props.setLanguage("de")}
              />
              <img
                src={norwegianFlag}
                alt="Norwegian"
                className="flagStyle"
                onClick={() => this.props.setLanguage("no")}
              />
            </AppBody>

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
    language: state.language,
    languageOverlay: state.languageOverlay
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
    },
    setLanguageOverlay: languageOverlay => {
      dispatch(setLanguageOverlay(languageOverlay));
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
  setLanguage: PropTypes.func,
  setLanguageOverlay: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
