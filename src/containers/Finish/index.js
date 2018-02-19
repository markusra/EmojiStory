import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import SocialButtons from "../../components/SocialButtons/index";
import PropTypes from "prop-types";
import { redirectUser } from "../../services/redirectUser";

// Connect to Redux store
import { connect } from "react-redux";

import { timestampUpdateDB } from "../../services/timestampUpdateDB";
import { calculateTimeUsed } from "../../services/calculateTimeUsed";

class Finish extends Component {

  componentWillMount() {
    redirectUser(this.props.userProgress);
    // Calculate time spent on logging in the second time and send it to DB
    const timeUsed = calculateTimeUsed(this.props.timestamp1, this.props.timestamp2);
    timestampUpdateDB(this.props.dbKey, "timestamp5", timeUsed, this.props.loginAttempts);
  }

  render() {
    return (
      <AppContainer appTitle="Survey Finished!">
        <AppBody>
          <p>
            You finished the survey and your answers are send to us. Thank you!
          </p>
        </AppBody>

        <AppFooter>
          <SocialButtons />
        </AppFooter>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress,
    timestamp1: state.timestamp1,
    timestamp2: state.timestamp2,
    loginAttempts: state.loginAttempts,
    dbKey: state.dbKey
  };
};

Finish.propTypes = {
  userProgress: PropTypes.string
};

export default connect(mapStateToProps)(Finish);

