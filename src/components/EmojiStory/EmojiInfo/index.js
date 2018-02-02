import React, { Component } from "react";
import PropTypes from "prop-types";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiFooter from "../../../components/EmojiStory/EmojiContainer/EmojiFooter";

// Connect to Redux store
// import { connect } from "react-redux";
// import { redirectUser } from "../../../services/redirectUser";

// Import Bootstrap Components
import { Button } from "reactstrap";

class EmojiInfo extends Component {
  addInstructions(infoList, clicks) {
    if (clicks === 1) {
      infoList.push(
        <li>
          You do this by <span className="yellow">selecting keywords</span> to
          substitute for blanks in a <span className="yellow">story</span>.
        </li>
      );
    }
    if (clicks === 2) {
      infoList.push(
        <li>
          Each keyword <span className="yellow">corresponds</span> to an emoji.
        </li>
      );
    }
    if (clicks === 3) {
      infoList.push(
        <li>
          The <span className="yellow">sequence of emojis</span> that occurs
          will form your emoji-password.
        </li>
      );
    }
    return infoList;
  }

  render() {
    const instructions = this.addInstructions(
      this.props.infoList,
      this.props.clicks
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
