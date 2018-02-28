import React, { Component } from "react";
import PropTypes from "prop-types";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
import SocialButtons from "../../components/SocialButtons/index";
import { connect } from "react-redux";
import { redirectUser } from "../../services/redirectUser";

class Finish extends Component {
  componentWillMount() {
    redirectUser(this.props.userProgress);
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
    userProgress: state.userProgress
  };
};

Finish.propTypes = {
  userProgress: PropTypes.string
};

export default connect(mapStateToProps)(Finish);
