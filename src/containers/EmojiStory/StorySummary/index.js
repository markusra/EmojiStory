import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import EmojiHeader from "../../../components/EmojiStory/EmojiContainer/EmojiHeader";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiFooter from "../../../components/EmojiStory/EmojiContainer/EmojiFooter";
import EmojiRow from "../../../components/EmojiStory/EmojiRow";

import history from "../../../history";

// Connect to Redux store
import { connect } from "react-redux";

import { redirectUser } from "../../../services/redirectUser";

// Import Bootstrap Components
import { Button, Row } from "reactstrap";

class StorySummary extends Component {
  componentWillMount() {
    redirectUser(this.props.userProgress);
  }

  fillPlaceholders(storyTemplate, emojis) {
    var splitStory = storyTemplate.split(/[*]{3}/g);

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
    history.push("/login");
  }

  /*eslint no-undef: 0*/
  render() {
    const userStory = this.fillPlaceholders(
      this.props.storyTemplate,
      this.getEmojiTextArray()
    );

    const emojiIcons = this.getEmojiIconArray();

    return (
      <EmojiContainer>
        <EmojiHeader title="That's it – here is the whole story" />
        
        <EmojiBody>
          <h3
            style={{
              textAlign: "left",
              paddingLeft: "15px",
              paddingRight: "15px"
            }}
          >
            {userStory}
          </h3>
        </EmojiBody>
        <EmojiFooter>
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
          <Button
            color="default"
            className="emojiStoryAccept"
            size="lg"
            onClick={() => this.onButtonClick()}
            block
          >
            Ok, I remember!
          </Button>
        </EmojiFooter>
      </EmojiContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress,
    storyTemplate: state.storyTemplate,
    answers: state.answers
  };
};

StorySummary.propTypes = {
  userProgress: PropTypes.string,
  storyTemplate: PropTypes.string,
  answers: PropTypes.array
};

export default connect(mapStateToProps)(StorySummary);
