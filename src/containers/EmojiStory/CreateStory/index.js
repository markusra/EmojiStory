import React, { Component } from "react";
import EmojiQuiz from "../../../components/EmojiStory/EmojiQuiz/index";
import EmojiInfo from "../../../components/EmojiStory/EmojiInfo/index";
import "./index.css";
import PropTypes from "prop-types";

// Connect to Redux store
import { connect } from "react-redux"; 

import { redirectUser } from "../../../services/redirectUser";

class EmojiStory extends Component {
  constructor(props) {
    super(props);
    this.state = { questionID: 0, page: "info" }
    this.setPage = this.setPage.bind(this);
  }

  setPage() {
    this.setState({
      page: "create"
    });
  }

  componentWillMount() {
    redirectUser(this.props.userProgress);
  }

  render() {
    return (
      <div>
        {this.state.page === "info" && (
          <EmojiInfo onContinueClick={this.setPage} />
        )}
        {this.state.page === "create" && (
          <EmojiQuiz />
        )}
      </div>
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
