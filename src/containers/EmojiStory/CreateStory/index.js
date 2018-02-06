import React, { Component } from "react";
import EmojiQuiz from "../../../components/EmojiStory/EmojiQuiz/index";
import EmojiInfo from "../../../components/EmojiStory/EmojiInfo/index";
import "./index.css";
import PropTypes from "prop-types";

// Connect to Redux store
import { connect } from "react-redux";

import { redirectUser } from "../../../services/redirectUser";

class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionID: 0,
      page: "info",
      clicks: 0,
      infoList: []
    };
    this.incrementClick = this.incrementClick.bind(this);
  }

  incrementClick() {
    this.setState({ clicks: this.state.clicks + 1 });
    if (this.state.clicks === 3) {
      this.setState({
        page: "create"
      });
    }
  };

  componentWillMount() {
    redirectUser(this.props.userProgress);
  }

  render() {
    return (
      <div>
        {this.state.page === "info" && (
          <EmojiInfo
            onContinueClick={this.incrementClick}
            clicks={this.state.clicks}
            infoList={this.state.infoList}
          />
        )}
        {this.state.page === "create" && <EmojiQuiz />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress
  };
};

CreateStory.propTypes = {
  userProgress: PropTypes.string
};

export default connect(mapStateToProps)(CreateStory);
