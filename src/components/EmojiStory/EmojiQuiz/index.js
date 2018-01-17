import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import quizQuestions from '../../../api/quizset_1';

// Import Bootstrap Components
import { Button } from "reactstrap";

class EmojiQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions.questions[0].question,
      answerOptions: quizQuestions.questions[0].answerOptions
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

  handleAnswerClick(event) {
    alert(event.currentTarget.value);
  }
  
  render() {
    return (
      <Fragment>
          <Button color="answer" size="lg" onClick={this.handleAnswerClick} block>
            Test
          </Button>
      </Fragment>
    );
  }
}

EmojiQuiz.propTypes = {
  handleAnswerClick: PropTypes.func,
  question: PropTypes.string,
  answers: PropTypes.array
};

export default EmojiQuiz;