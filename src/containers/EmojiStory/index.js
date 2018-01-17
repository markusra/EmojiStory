import React, { Component } from "react";
import AppContainer from "../../components/AppContainer";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";
// import EmojiQuestion from "../../components/EmojiStory/EmojiQuestion/index";
import EmojiQuiz from "../../components/EmojiStory/EmojiQuiz/index";
import StepCount from "../../components/EmojiStory/StepCount";
import "./index.css";

class EmojiStory extends Component {
  constructor(props) {
    super(props);
    this.state = { questionID: 0 };
  }

  render() {
    return (
      <AppContainer
        appTitle="Create a story by selecting words"
        appStyle="emojiQuestion"
      >
        <AppBody>
          <EmojiQuiz />
          
          {/* <EmojiQuestion
            question="Kim comes from…"
            answers={["China", "Norway", "Germany", "Egypt", "Vietnam"]}
          /> */}
        </AppBody>
        <AppFooter>
        <StepCount
           counter={1}
           total={4}
         /></AppFooter>
      </AppContainer>
    );
  }
}

export default EmojiStory;
