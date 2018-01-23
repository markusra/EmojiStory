import React, { Component } from "react";
import EmojiQuiz from "../../components/EmojiStory/EmojiQuiz/index";
import "./index.css";
import PropTypes from "prop-types";

// Connect to Redux store
import { connect } from "react-redux";

import history from"../../history"

class EmojiStory extends Component {
  constructor(props) {
    super(props);
    this.state = { questionID: 0 };
  }

  componentWillMount() {

    console.log(history.location.pathname);
    
  }

  render() {
    return (
      <EmojiQuiz />
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress
  };
};

EmojiStory.propTypes = {
  userProgress: PropTypes.number
};


export default connect(mapStateToProps)(EmojiStory);
