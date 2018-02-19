import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiRow from "../../../components/EmojiStory/EmojiRow";

import { emojiStoryUpdateDB } from "../../../services/emojiStoryUpdateDB";

import history from "../../../history";

// Connect to Redux store
import { connect } from "react-redux";
import { setUserProgress } from "../../../actions/index";
import { setTimestamp1, setTimestamp2 } from "../../../actions/index";


import { redirectUser } from "../../../services/redirectUser";

// Import Bootstrap Components
import { Button, Row } from "reactstrap";

import { timestampUpdateDB } from "../../../services/timestampUpdateDB";
import { calculateTimeUsed } from "../../../services/calculateTimeUsed";
import { createTimestamp } from "../../../services/createTimestamp";

class StorySummary extends Component {
  componentWillMount() {
    redirectUser(this.props.userProgress);
    // Calculate time spent on creating the emoji-password and send it to DB
    const timeUsed = calculateTimeUsed(this.props.timestamp1, this.props.timestamp2)
    timestampUpdateDB(this.props.dbKey, "timestamp2", timeUsed)

    // Set first timestamp for time spent on memorizing
    const timestamp = createTimestamp();
    this.props.setTimestamp1(timestamp);
  }

  fillPlaceholders(storyTemplate, emojis) {
    const storyString = storyTemplate.join("");
    const splitStory = storyString.split(/[*]{3}/g);

    const storyLength = splitStory.length;
    const emojisLength = emojis.length;

    var storyList = [];
    for (var i = 0; i < storyLength + emojisLength; i++) {
      if (i % 2 === 1) {
        storyList.push(
          <span key={i} className="yellow">
            {emojis.shift()}
          </span>
        );
      } else {
        storyList.push(splitStory.shift());
      }
    }

    return storyList;
  }

  getEmojiTextArray() {
    var emojiTextArray = [];

    this.props.answers.map(answer => emojiTextArray.push(answer.text));

    return emojiTextArray;
  }

  getEmojiIconArray() {
    var emojiIconArray = [];

    this.props.answers.map(answer => emojiIconArray.push(answer.src));

    return emojiIconArray;
  }

  onButtonClick() {
    // Set second timestamp for time spent on memorizing
    const timestamp = createTimestamp();
    this.props.setTimestamp2(timestamp);

    var emojiTextArray = [];

    this.props.answers.map(answer => emojiTextArray.push(answer.text));
    // Update DB
    emojiStoryUpdateDB(this.props.dbKey, emojiTextArray, [0,1,2], "keyboard");

    const url = "/login";
    this.props.setUserProgress(url);
    history.push(url);
  }

  render() {
    const userStory = this.fillPlaceholders(
      this.props.storyTemplate,
      this.getEmojiTextArray()
    );

    const emojiIcons = this.getEmojiIconArray();

    return (
      <EmojiContainer>
        <EmojiBody>
          <div className="storyContainer">
            <div className="storyDiv">
              <h3
                style={{
                  padding: "15px",
                  border: "1px solid white",
                  borderRadius: "8px"
                }}
              >
                {userStory}
              </h3>
            </div>
            <div className="emojiDiv">
              <div className="emojiContainer justify-content-center">
                <Row className="storyHeader justify-content-center">
                  Memorise this EmojiStory
                </Row>
                <EmojiRow
                  emojiIcon_1={emojiIcons[0]}
                  emojiIcon_2={emojiIcons[1]}
                  emojiIcon_3={emojiIcons[2]}
                  emojiIcon_4={emojiIcons[3]}
                />
              </div>
            </div>

            <div className="rememberButton">
              <Button
                color="primary"
                className="emojiStoryAccept"
                size="lg"
                onClick={() => this.onButtonClick()}
                block
              >
                Ok, I remember!
              </Button>
            </div>
          </div>
        </EmojiBody>
      </EmojiContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress,
    storyTemplate: state.storyTemplate,
    answers: state.answers,
    dbKey: state.dbKey,
    timestamp1: state.timestamp1,
    timestamp2: state.timestamp2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserProgress: userProgress => {
      dispatch(setUserProgress(userProgress));
    },
    setTimestamp1: timestamp1 => {
      dispatch(setTimestamp1(timestamp1));
    },
    setTimestamp2: timestamp2 => {
      dispatch(setTimestamp2(timestamp2));
    }
  };
};

StorySummary.propTypes = {
  userProgress: PropTypes.string,
  storyTemplate: PropTypes.array,
  answers: PropTypes.array,
  userStory: PropTypes.string,
  setUserProgress: PropTypes.func,
  dbKey: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(StorySummary);
