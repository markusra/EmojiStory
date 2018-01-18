import React, { Component } from "react";
import EmojiQuiz from "../../components/EmojiStory/EmojiQuiz/index";
import "./index.css";

class EmojiStory extends Component {
  constructor(props) {
    super(props);
    this.state = { questionID: 0 };
  }

  render() {
    return (
      <EmojiQuiz />
    );
  }
}

export default EmojiStory;
