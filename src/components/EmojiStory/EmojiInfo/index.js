import React, { Component } from "react";
import PropTypes from "prop-types";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiFooter from "../../../components/EmojiStory/EmojiContainer/EmojiFooter";

// Import Bootstrap Components
import { Button } from "reactstrap";

class EmojiInfo extends Component {
  addInstructions(infoList, clicks, liStyle) {
    if (clicks === 0) {
      infoList.push(
        <li key={clicks}>
          Next you will create an <span className="yellow">emoji-password</span>.
        </li>
      );
    }
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
          <h3
            style={{
              textAlign: "left",
              fontSize: "1.5rem"
            }}
          >
            <ul
              style={{
                paddingLeft: "23px"
              }}
            >
              {instructions}
            </ul>
          </h3>
        </EmojiBody>
        <EmojiFooter>
          {this.props.clicks < 3 && (
            <Button
              color="primary"
              size="lg"
              onClick={this.props.onContinueClick}
              block
            >
              Continue
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

EmojiInfo.propTypes = {
  onContinueClick: PropTypes.func,
  clicks: PropTypes.number,
  infoList: PropTypes.array
};

export default EmojiInfo;
