import React, { Component } from "react";
import PropTypes from "prop-types";
import quizQuestions from "../../../api/quizset_1";
import EmojiQuestion from "../EmojiQuestion/index";
import EmojiContainer from "../EmojiContainer";
import AppBody from "../../AppBody";
import AppFooter from "../../AppFooter";
import StepCount from "../StepCount";
import EmojiOverlay from "../EmojiOverlay/index";

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
      chosenAnswer: []
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions.questions[0].question,
      answerOptions: quizQuestions.questions[0].answers
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions.questions[counter].question,
      answerOptions: quizQuestions.questions[counter].answers
    });
  }

  handleAnswerClick(answer) {
    this.setState({ overlayQuestion: this.state.question, answerOverlay: true, chosenAnswer: answer });
  }

  handleBackClick() {
    this.setState({ answerOverlay: false });
  }

  handleContinueClick() {
    this.setState({ answerOverlay: false });
    this.setNextQuestion();
  }

  render() {
    return (
      <EmojiContainer
        appTitle="Create a story by selecting words"
        appStyle="emojiQuestion"
      >
        <EmojiOverlay
          visible={this.state.answerOverlay}
          onBackClick={this.handleBackClick}
          onContinueClick={this.handleContinueClick}
          question={this.state.overlayQuestion}
          answer={this.state.chosenAnswer}
        />
        <AppBody>
          <EmojiQuestion
            question={this.state.question}
            answerOptions={this.state.answerOptions}
            onAnswerSelected={this.handleAnswerClick}
          />
        </AppBody>
        <AppFooter>
          <StepCount
            counter={this.state.questionId}
            total={quizQuestions.questions.length}
          />
        </AppFooter>
      </EmojiContainer>
    );
  }
}

EmojiQuiz.propTypes = {
  handleAnswerClick: PropTypes.func,
  question: PropTypes.string,
  answers: PropTypes.array
};

export default EmojiQuiz;
