import React, { Component } from "react";
import PropTypes from "prop-types";

import history from "../../../history";

// Connect to Redux store
import { connect } from "react-redux";

import quizQuestions from "../../../api/quizset_1";
import EmojiQuestion from "../EmojiQuestion/index";
import EmojiContainer from "../EmojiContainer";
import EmojiBody from "../EmojiContainer/EmojiBody";
import EmojiOverlay from "../EmojiOverlay/index";
import { timestampUpdateDB } from "../../../services/timestampUpdateDB";
import { calculateTimeUsed } from "../../../services/calculateTimeUsed";
import { createTimestamp } from "../../../services/createTimestamp";

import { addAnswer, setUserProgress, setTimestamp1, setTimestamp2 } from "../../../actions/index";

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
      userStory: []
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
    // Calculate time spent on the "instructions page" and send it to DB
    const timeUsed = calculateTimeUsed(
      this.props.timestamp1,
      this.props.timestamp2
    );
    timestampUpdateDB(this.props.dbKey, "timestamp1", timeUsed);

    // Set first timestamp for time spent on creating the emoji-password
    const timestamp = createTimestamp();
    this.props.setTimestamp1(timestamp);

    const firstQuestion = quizQuestions.story[0].split(/[*]{3}/g);
    firstQuestion.splice(
      1,
      0,
      <span className="yellow" key="0">
        ___
      </span>
    );

    const answerOptions = quizQuestions.questions[0].answers;

    this.setState({
      question: quizQuestions.questions[0].question,
      answerOptions: answerOptions,
      chosenAnswer: quizQuestions.questions[0].answers[0],
      userStory: [firstQuestion]
    });

    // Preload images
    answerOptions.map(this.preloadImage);
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

    const nextQuestion = quizQuestions.story[counter].split(/[*]{3}/g);
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

    const answerOptions = quizQuestions.questions[counter].answers;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions.questions[counter].question,
      answerOptions: quizQuestions.questions[counter].answers
    });

    // Preload images
    answerOptions.map(this.preloadImage);
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

    this.setState({
      userStory: this.fillPlaceholder(this.state.counter + 1)
    });

    if (this.state.questionId === quizQuestions.questions.length) {
      // Set second timestamp for time spent on creating the emoji-password
      const timestamp = createTimestamp();
      this.props.setTimestamp2(timestamp);

      const url = "/summary";
      this.props.setUserProgress(url);
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
    dbKey: state.dbKey,
    timestamp1: state.timestamp1,
    timestamp2: state.timestamp2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAnswer: answer => {
      dispatch(addAnswer(answer));
    },
    setUserProgress: userProgress => {
      dispatch(setUserProgress(userProgress));
    },
    setTimestamp1: timestamp1 => {
      dispatch(setTimestamp1(timestamp1));
    },
    setTimestamp2: timestamp2 => {
      dispatch(setTimestamp2(timestamp2));
    }
  };
};

EmojiQuiz.propTypes = {
  handleAnswerClick: PropTypes.func,
  answers: PropTypes.array,
  test: PropTypes.string,
  addAnswer: PropTypes.func,
  setUserProgress: PropTypes.func,
  deleteAnswers: PropTypes.func,
  dbKey: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiQuiz);
