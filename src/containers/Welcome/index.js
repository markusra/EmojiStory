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
import { changeUserProgress } from "../../actions/index";

// TODO: Fix email address
class Welcome extends Component {
  onButtonClick() {   
    const url = "/createEmojiStory"
    this.props.changeUserProgress(url)
    history.push(url);
  }

  render() {
    return (
      <AppContainer appTitle="Survey – Emoji-Based Authentication">
        <AppBody>
          <p>
            This survey is created by Martin Kjellevand and Markus Rauhut for
            researching the <b>usability</b> and <b>security</b> of emoji-based
            authentication. The data from this survey is collected for a master
            thesis conducted at the{" "}
            <b>Norwegian University of Science and Technology</b>. The survey is
            divided into two parts. In order to be able to remind you about the
            second part, we ask you for an email address.
          </p>

          <p>
            All data collected is encrypted, will be treated confidentially and
            is only used for research purposes. No personal information will be
            disclosed to the public and you will not be recognizable in the
            publication. The project is scheduled for completion by June 2018.
            At this point all data will be anonymised. If you have any questions
            concerning the project, please contact us at [email address]. The
            study has been notified to the Data Protection Official for
            Research, NSD - Norwegian Centre for Research Data.
          </p>
        </AppBody>

        <AppFooter>
          <Button color="success" size="lg" onClick={() => this.onButtonClick()} block>
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
    changeUserProgress: userProgress => {
      dispatch(changeUserProgress(userProgress));
    }
  };
};

Welcome.propTypes = {
  changeUserProgress: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
