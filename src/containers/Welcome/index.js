import React, { Component } from "react";
import PropTypes from "prop-types";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";

// Import Bootstrap Components
import { Button } from "reactstrap";

import history from "../../history";

// Connect to Redux store
import { connect } from "react-redux";
import { setUserProgress, deleteAnswers, setDbKey } from "../../actions/index";
import { sendDataToDB } from "../../services/sendDataToDB";

// TODO: Fix email address
class Welcome extends Component {
  onButtonClick() {
    this.props.deleteAnswers();

    const key = sendDataToDB();
    this.props.setDbKey(key);

    const url = "/emojiStory";
    this.props.setUserProgress(url);
    history.push(url);
  }

  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <p>
            This survey is created by Martin Kjellevand and Markus Rauhut in
            order to research the <b>usability</b> and <b>security</b> of
            emoji-based authentication. The data from this survey is collected
            for a master thesis conducted at the{" "}
            <b>Norwegian University of Science and Technology</b>.
          </p>

          <p>
            The survey is anonymous and you will not be asked for any personal
            information. If you have any questions concerning the project,
            please contact us at [email address]. The study has been notified to
            the Data Protection Official for Research, NSD - Norwegian Centre
            for Research Data.
          </p>
        </AppBody>

        <AppFooter>
          <Button
            color="success"
            size="lg"
            onClick={() => this.onButtonClick()}
            block
          >
            Start the survey
          </Button>
        </AppFooter>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress
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
    setDbKey: dbKey => {
      dispatch(setDbKey(dbKey));
    }
  };
};

Welcome.propTypes = {
  setUserProgress: PropTypes.func,
  deleteAnswers: PropTypes.func,
  setDbKey: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
