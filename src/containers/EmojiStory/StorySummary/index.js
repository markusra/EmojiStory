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

class EmojiStory extends Component {
  componentWillMount() {
    //redirectUser(this.props.userProgress);
  }

  render() {
    return (
      <EmojiContainer
        appTitle="That's it – here is the whole story"
      >
        <EmojiBody>
          <h3 style={{textAlign: "left"}}>Kim comes from Norway. She often feels sleepy, but loves sushi and satellites.</h3>
        </EmojiBody>
        <EmojiFooter>
          <Button color="answer" size="lg" onClick={() => this.onButtonClick()} block>
            Ok, I remember!
          </Button>
        </EmojiFooter>
      </EmojiContainer>
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
