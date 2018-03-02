import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import { Button } from "reactstrap";
import history from "../../history";
import { connect } from "react-redux";
import {
  setUserProgress,
  deleteAnswers,
  deleteAnswerIndices, setDeviceType
} from "../../actions/index";
import { createDBEntry } from "../../services/databaseFunctions";
import { checkDeviceType } from "../../services/checkDeviceType";

import { redirectUser } from "../../services/redirectUser";

// TODO: Fix email address
class Welcome extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      willRedirect: redirectUser(this.props.userProgress)
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
    ) }
    </Fragment>
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
    deleteAnswerIndices: userStory => {
      dispatch(deleteAnswerIndices(userStory));
    },
    setDeviceType: deviceType => {
      dispatch(setDeviceType(deviceType));
    }
  };
};

Welcome.propTypes = {
  setUserProgress: PropTypes.func,
  deleteAnswers: PropTypes.func,
  userProgress: PropTypes.string,
  deleteAnswerIndices: PropTypes.func,
  setDeviceType: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
