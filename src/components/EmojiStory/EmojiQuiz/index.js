import React, { Component } from "react";
import PropTypes from "prop-types";
import history from "../../../history";
import EmojiQuestion from "../EmojiQuestion/index";
import EmojiContainer from "../EmojiContainer";
import EmojiBody from "../EmojiContainer/EmojiBody";
import EmojiOverlay from "../EmojiOverlay/index";
import { connect } from "react-redux";
import {
  getRandomStory,
  getRandomAnswerOptions,
  getRandomStoryFile
} from "../../../services/randomizer";
import {
  addAnswer,
  addAnswerIndex,
  setStoryTemplate,
  setStoryID,
  increaseBackButtonCounter
} from "../../../actions/index";

class EmojiQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      overlayQuestion: "",
      answerOptions: [],
      answerOverlay: false,
      chosenAnswer: [],
      userStory: [],
      randomStory: [],
      randomAnswerOptions: [],
      chosenAndwerIndex: null
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
  }

  preloadImage(answerOption) {
    var img = new Image();
    img.src = "/emojis/" + answerOption.src;
  }

  componentWillMount() {
    const randomStoryFile = getRandomStoryFile();
    const randomStory = getRandomStory(randomStoryFile);

    this.props.setStoryTemplate(randomStory.story);
    this.props.setStoryID(randomStoryFile);

    const randomAnswerOptions = getRandomAnswerOptions(randomStory);
    const firstQuestion = randomStory.story[0].split(/[*]{3}/g);
    firstQuestion.splice(
      1,
      0,
      <span className="yellow" key="0">
        ___
      </span>
    );

    const answerOptions = randomAnswerOptions[0];

    // Preload images
    answerOptions.map(this.preloadImage);

    this.setState({
      randomStory: randomStory,
      randomAnswerOptions: randomAnswerOptions,
      question: randomStory.questions[0].question,
      answerOptions: answerOptions,
      chosenAnswer: randomStory.questions[0].answers[0],
      userStory: [firstQuestion]
    });
  }

  fillPlaceholder(counter) {
    const tempStory = this.state.userStory.slice();

    tempStory[counter - 1].splice(
      1,
      1,
      <span className="yellow" key={this.state.chosenAnswer.text}>
        {this.state.chosenAnswer.text}
      </span>
    );

    return tempStory;
  }

  addSentence(counter) {
    const tempStory = this.state.userStory.slice();
    const nextQuestion = this.state.randomStory.story[counter].split(/[*]{3}/g);
    nextQuestion.splice(
      1,
      0,
      <span className="yellow" key="0">
        ___
      </span>
    );
    tempStory.push(nextQuestion);
    return tempStory;
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    const answerOptions = this.state.randomAnswerOptions[counter];

    // Preload images
    answerOptions.map(this.preloadImage);

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.randomStory.questions[counter].question,
      answerOptions: answerOptions
    });
  }

  handleAnswerClick(answer, index) {
    this.setState({
      overlayQuestion: this.state.question,
      answerOverlay: true,
      chosenAnswer: answer,
      chosenAndwerIndex: index
    });
  }

  handleBackClick() {
    this.setState({ answerOverlay: false });
    this.props.increaseBackButtonCounter();
  }

  handleContinueClick() {
    this.props.addAnswer(this.state.chosenAnswer);
    this.props.addAnswerIndex(this.state.chosenAndwerIndex);

    this.setState({
      userStory: this.fillPlaceholder(this.state.counter + 1)
    });

    if (this.state.questionId === this.state.randomStory.questions.length) {
      const url = "/summary";
      history.push(url);
    } else {
      this.setState({ answerOverlay: false });
      this.setNextQuestion();

      this.setState({
        userStory: this.addSentence(this.state.counter + 1)
      });
    }
  }

  render() {
    return (
      <EmojiContainer>
        <EmojiOverlay
          visible={this.state.answerOverlay}
          onBackClick={this.handleBackClick}
          onContinueClick={this.handleContinueClick}
          question={this.state.overlayQuestion}
          answer={this.state.chosenAnswer}
        />
        <EmojiBody>
          <EmojiQuestion
            userStory={this.state.userStory}
            answerOptions={this.state.answerOptions}
            onAnswerSelected={this.handleAnswerClick}
          />
        </EmojiBody>
      </EmojiContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers,
    timestamp1: state.timestamp1,
    timestamp2: state.timestamp2,
    nrkReferrer: state.nrkReferrer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAnswer: answer => {
      dispatch(addAnswer(answer));
    },
    addAnswerIndex: answerIndex => {
      dispatch(addAnswerIndex(answerIndex));
    },
    setStoryTemplate: storyTemplate => {
      dispatch(setStoryTemplate(storyTemplate));
    },
    setStoryID: storyID => {
      dispatch(setStoryID(storyID));
    },
    increaseBackButtonCounter: () => {
      dispatch(increaseBackButtonCounter());
    }
  };
};

EmojiQuiz.propTypes = {
  handleAnswerClick: PropTypes.func,
  answers: PropTypes.array,
  test: PropTypes.string,
  addAnswer: PropTypes.func,
  deleteAnswers: PropTypes.func,
  setStoryTemplate: PropTypes.func,
  setStoryID: PropTypes.func,
  addAnswerIndex: PropTypes.func,
  increaseBackButtonCounter: PropTypes.func,
  nrkReferrer: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiQuiz);
