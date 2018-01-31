import React, { Component } from "react";
import PropTypes from "prop-types";

import history from "../../../history";

// Connect to Redux store
import { connect } from "react-redux";
import { addAnswer } from "../../../actions";

import quizQuestions from "../../../api/quizset_1";
import EmojiQuestion from "../EmojiQuestion/index";
import EmojiContainer from "../EmojiContainer";
import EmojiHeader from "../EmojiContainer/EmojiHeader";
import EmojiBody from "../EmojiContainer/EmojiBody";
// import EmojiFooter from "../EmojiContainer/EmojiFooter";
// import StepCount from "../StepCount";
import EmojiOverlay from "../EmojiOverlay/index";

import { setUserProgress } from "../../../actions/index";

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
      answerOptions: quizQuestions.questions[0].answers,
      chosenAnswer: quizQuestions.questions[0].answers[0]
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
    this.setState({
      overlayQuestion: this.state.question,
      answerOverlay: true,
      chosenAnswer: answer
    });
  }

  handleBackClick() {
    this.setState({ answerOverlay: false });
  }

  handleContinueClick() {
    this.props.addAnswer(this.state.chosenAnswer);

    if (this.state.questionId === quizQuestions.questions.length) {
      const url = "/summary"
      this.props.setUserProgress(url)
      history.push(url);
    } else {
      this.setState({ answerOverlay: false });
      this.setNextQuestion();
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
        <EmojiHeader title="Create a story by selecting words"/>
        <EmojiBody>
          <EmojiQuestion
            question={this.state.question}
            answerOptions={this.state.answerOptions}
            onAnswerSelected={this.handleAnswerClick}
          />
        </EmojiBody>
        {/* <EmojiFooter>
          <StepCount
            counter={this.state.questionId}
            total={quizQuestions.questions.length}
          />
        </EmojiFooter> */}
      </EmojiContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAnswer: answer => {
      dispatch(addAnswer(answer));
    },
    setUserProgress: userProgress => {
      dispatch(setUserProgress(userProgress));
    }
  };
};

EmojiQuiz.propTypes = {
  handleAnswerClick: PropTypes.func,
  question: PropTypes.string,
  answers: PropTypes.array,
  test: PropTypes.string,
  addAnswer: PropTypes.func,
  setUserProgress: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiQuiz);
