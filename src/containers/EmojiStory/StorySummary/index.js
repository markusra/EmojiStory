import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiFooter from "../../../components/EmojiStory/EmojiContainer/EmojiFooter";

import history from "../../../history";

// Connect to Redux store
import { connect } from "react-redux";

import { redirectUser } from "../../../services/redirectUser";

// Import Bootstrap Components
import { Button, Row } from "reactstrap";

class EmojiStory extends Component {
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
    var emojyTextArray = [];

    this.props.answers.map(answer => emojyTextArray.push(answer.text));

    return emojyTextArray;
  }

  getEmojiIconArray() {
    var emojyIconArray = [];

    this.props.answers.map(answer => emojyIconArray.push(answer.src));

    return emojyIconArray;
  }

  onButtonClick() {
    history.push("/finish")
  }

  /*eslint no-undef: 0*/
  render() {
    const userStory = this.fillPlaceholders(
      this.props.storyTemplate,
      this.getEmojiTextArray()
    );

    const emojiIcons = this.getEmojiIconArray();

    return (
      <EmojiContainer appTitle="That's it – here is the whole story">
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
            <Row className="storyHeader justify-content-center">Memorise this EmojiStory</Row>
            <Row className="emojis justify-content-center">
              <div className="emojiBackground">
                <img
                  src={process.env.PUBLIC_URL + "/emojis/" + emojiIcons[0]}
                  alt="Emoji 1"
                />
              </div>
              <div className="emojiBackground">
                <img
                  src={process.env.PUBLIC_URL + "/emojis/" + emojiIcons[1]}
                  alt="Emoji 2"
                />
              </div>

              <div className="emojiBackground">
                <img
                  src={process.env.PUBLIC_URL + "/emojis/" + emojiIcons[2]}
                  alt="Emoji 3"
                />
              </div>

              <div className="emojiBackground margin-0">
                <img
                  src={process.env.PUBLIC_URL + "/emojis/" + emojiIcons[3]}
                  alt="Emoji 4"
                />
              </div>
            </Row>
          </div>
          <Button
            color="answer"
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

EmojiStory.propTypes = {
  userProgress: PropTypes.string,
  storyTemplate: PropTypes.string,
  answers: PropTypes.array
};

export default connect(mapStateToProps)(EmojiStory);
