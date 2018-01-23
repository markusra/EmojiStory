import React, { Component } from "react";
import PropTypes from "prop-types";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import AppBody from "../../../components/AppBody";
import AppFooter from "../../../components/AppFooter";

// Connect to Redux store
import { connect } from "react-redux";

import { redirectUser } from "../../../services/redirectUser";

class EmojiStory extends Component {
  componentWillMount() {
    //redirectUser(this.props.userProgress);
  }

  render() {
    return (
      <EmojiContainer
        appTitle="Create a story by selecting words"
      >
        <AppBody>
          asdasd
        </AppBody>
        <AppFooter>
          asdasd
        </AppFooter>
      </EmojiContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress
  };
};

EmojiStory.propTypes = {
  userProgress: PropTypes.string
};


export default connect(mapStateToProps)(EmojiStory);
