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
  setLanguage,
  setNRKReferrer
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
          authentication. The survey will take approximately 3-5 minutes. The
          data from this survey is collected for a master thesis conducted at
          the <b>Norwegian University of Science and Technology</b>.
        </p>

        <p>
          The survey is <b>anonymous</b> and you will not be asked for any
          sensitive personal information. If you have any questions concerning
          the project, please{" "}
          <a
            className="hyperlink"
            href="mailto:mail@emojistory.site?subject=Survey on Emoji Passwords"
            rel="noopener noreferrer"
            target="_blank"
          >
            send us an email
          </a>. The study has been notified to the{" "}
          <i>Data Protection Official for Research (NSD)</i>.
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
          emoji-passord. Undersøkelsen tar 3-5 minutter. Dataen som blir samlet
          inn vil bli brukt i en masteroppgave på{" "}
          <b>Norges teknisk-naturvitenskapelige universitet (NTNU)</b>.
        </p>

        <p>
          Undersøkelsen er <b>anonym</b> og du vil ikke bli bedt om å oppgi
          sensitive personopplysninger. Om du skulle ha spørsmål om prosjektet,
          vennligst{" "}
          <a
            className="hyperlink"
            href="mailto:mail@emojistory.site?subject=Survey on Emoji Passwords"
            rel="noopener noreferrer"
            target="_blank"
          >
            send oss en e-post
          </a>. Undersøkelsen har blitt meldt til{" "}
          <i>Norsk senter for forskningsdata (NSD)</i>.
        </p>
      </Fragment>
    ),
    startSurveyText: "Start undersøkelsen"
  },
  de: {
    welcomeText: (
      <Fragment>
        <p>
          Die folgende Online-Umfrage wurde von Martin Kjellevand und Markus
          Rauhut erstellt, um die <b>Benutzerfreundlichkeit</b> und{" "}
          <b>Sicherheit</b> von Emoji-Passwörtern zu ermitteln. Die Umfrage
          dauert ca. 3–5 Minuten. Alle gesammelten Daten werden in einer
          Masterarbeit an der{" "}
          <b>Norwegian University of Science and Technology (NTNU)</b>{" "}
          verwertet.
        </p>

        <p>
          Die Umfrage ist <b>anonym</b> und bittet nicht um das Eingeben von
          sensiblen Daten. Solltest du irgendwelche Fragen zu unserem Projekt
          haben, dann{" "}
          <a
            className="hyperlink"
            href="mailto:mail@emojistory.site?subject=Survey on Emoji Passwords"
            rel="noopener noreferrer"
            target="_blank"
          >
            sende uns bitte eine Mail
          </a>. Das <i>Norwegian Centre for Research Data (NSD)</i> wurde über
          dieses Projekt benachrichtigt.
        </p>
      </Fragment>
    ),
    startSurveyText: "Starte die Umfrage "
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

    const nrkReferrer =
      document.referrer.indexOf("nrkbeta.no") !== -1 ? true : false;
    if (nrkReferrer) {
      this.props.setNRKReferrer();
    }

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
            <AppBody>
              {strings[this.props.language].welcomeText}

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
    },
    setNRKReferrer: () => {
      dispatch(setNRKReferrer());
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
  setNRKReferrer: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
