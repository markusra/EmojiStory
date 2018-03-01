import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import { Button } from "reactstrap";
import history from "../../history";
import { connect } from "react-redux";
import { setUserProgress, deleteAnswers } from "../../actions/index";
import { createDBEntry } from "../../services/databaseFunctions";

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
    startSurveyText: "Start the survey"
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
          informasjon. Om du skulle ha noen spørsmål om prosjektet, kontakt (link på kontakt?) oss
          på [e-post adresse]. Undersøkelsen har blitt meldt til Norsk senter
          for forskningsdata (NSD).
        </p>
      </Fragment>
    ),
    startSurveyText: "Start undersøkelsen"
  },
  de: {
    welcomeText: ""
  }
};

// TODO: Fix email address
class Welcome extends Component {
  onButtonClick() {
    this.props.deleteAnswers();

    createDBEntry();

    const url = "/emojiStory";
    this.props.setUserProgress(url);
    history.push(url);
  }

  render() {
    return (
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
    }
  };
};

Welcome.propTypes = {
  setUserProgress: PropTypes.func,
  deleteAnswers: PropTypes.func,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
