import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css"

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiFooter from "../../../components/EmojiStory/EmojiContainer/EmojiFooter";

// Connect to Redux store
import { connect } from "react-redux";

import { redirectUser } from "../../../services/redirectUser";

// Import Bootstrap Components
import { Button } from "reactstrap";

class EmojiStory extends Component {
  componentWillMount() {
    //redirectUser(this.props.userProgress);
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

  render() {
    const userStory = this.fillPlaceholders(this.props.storyTemplate, [
      "Emoji 1",
      "Emoji 2",
      "Emoji 3",
      "Emoji 4"
    ]);
    return (
      <EmojiContainer appTitle="That's it – here is the whole story">
        <EmojiBody>
          <h3 style={{ textAlign: "left" }}>{userStory}</h3>
          
        </EmojiBody>
        <EmojiFooter>
          <div className="emojiStory">TEst</div>
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
    storyTemplate: state.storyTemplate
  };
};

EmojiStory.propTypes = {
  userProgress: PropTypes.string,
  storyTemplate: PropTypes.string
};

export default connect(mapStateToProps)(EmojiStory);
