import React, { Component } from "react";
import PropTypes from "prop-types";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiFooter from "../../../components/EmojiStory/EmojiContainer/EmojiFooter";
import "./index.css";

// Import Bootstrap Components
import { Button } from "reactstrap";

// Connect to Redux store
import { connect } from "react-redux";

import { setTimestamp1 } from "../../../actions/index";

import { createTimestamp } from "../../../services/createTimestamp";

class EmojiInfo extends Component {
  componentWillMount() {
    const timestamp = createTimestamp();
    // Set first timestamp for time spent on the "instructions page"
    this.props.setTimestamp1(timestamp);
    this.props.infoList.push(
      <li key={this.props.clicks}>
        Next you will create an <span className="yellow">emoji-password</span>.
      </li>
    );
  }

  addInstructions(infoList, clicks, liStyle) {
    if (clicks === 1) {
      infoList.pop();
      infoList.push(
        <li key={clicks - 1} style={liStyle}>
          Next you will create an <span className="yellow">emoji-password</span>.
        </li>,
        <li key={clicks}>
          You do this by <span className="yellow">selecting keywords</span> to
          substitute for blanks in a <span className="yellow">story</span>.
        </li>
      );
    }
    if (clicks === 2) {
      infoList.pop();
      infoList.push(
        <li key={clicks - 1} style={liStyle}>
          You do this by <span className="yellow">selecting keywords</span> to
          substitute for blanks in a <span className="yellow">story</span>.
        </li>,
        <li key={clicks}>
          Each keyword <span className="yellow">corresponds</span> to an emoji.
        </li>
      );
    }
    if (clicks === 3) {
      infoList.pop();
      infoList.push(
        <li key={clicks - 1} style={liStyle}>
          Each keyword <span className="yellow">corresponds</span> to an emoji.
        </li>,
        <li key={clicks}>
          The <span className="yellow">sequence of emojis</span> that occurs
          from the story, will form your emoji-password.
        </li>
      );
    }
    return infoList;
  }

  render() {
    const liStyle = {
      opacity: "0.3"
    };

    const instructions = this.addInstructions(
      this.props.infoList,
      this.props.clicks,
      liStyle
    );

    return (
      <EmojiContainer appTitle="Creating an emoji-password">
        <EmojiBody>
          <div className="instructionList">
            <ul>{instructions}</ul>
          </div>
        </EmojiBody>
        <EmojiFooter>
          {this.props.clicks < 3 && (
            <Button
              color="primary"
              size="lg"
              onClick={this.props.onContinueClick}
              block
            >
              Next
            </Button>
          )}
          {this.props.clicks === 3 && (
            <Button
              color="success"
              size="lg"
              onClick={this.props.onContinueClick}
              block
            >
              Begin
            </Button>
          )}
        </EmojiFooter>
      </EmojiContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    timestamp1: state.timestamp1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTimestamp1: timestamp1 => {
      dispatch(setTimestamp1(timestamp1));
    }
  };
};

EmojiInfo.propTypes = {
  onContinueClick: PropTypes.func,
  clicks: PropTypes.number,
  infoList: PropTypes.array,
  timestamp1: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiInfo);
