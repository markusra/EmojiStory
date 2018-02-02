import React, { Component } from "react";
import PropTypes from "prop-types";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiFooter from "../../../components/EmojiStory/EmojiContainer/EmojiFooter";


// Connect to Redux store
import { connect } from "react-redux";

import { redirectUser } from "../../../services/redirectUser";

// Import Bootstrap Components
import { Button } from "reactstrap";

class EmojiInfo extends Component {

  /*eslint no-undef: 0*/
  render() {

    return (
      <EmojiContainer appTitle="Creating an emoji-password">
        <EmojiBody>
          <h3
            style={{
              textAlign: "left",
              fontSize: "1.5rem"
            }}
          >
            <li>Next you will create an <span className="yellow">emoji-password</span>.</li>
          
            <li>You do this by <span className="yellow">creating a story</span> by <span className="yellow">selecting keywords</span> to substitute for blanks.</li>
         
            <li>Each keyword <span className="yellow">corresponds</span> to an emoji.</li>
          
            <li><span className="yellow">The sequence of emojis</span> that occurs will form your emoji-password.</li>
          </h3>
        </EmojiBody>
        <EmojiFooter>
          <Button
            color="primary"
            size="lg"
            onClick={() => {this.props.onContinueClick()}}
            block
          >
            Continue
          </Button>
        </EmojiFooter>
      </EmojiContainer>
    );
  }
}

EmojiInfo.propTypes = {
  onContinueClick: PropTypes.func
};


export default EmojiInfo;
