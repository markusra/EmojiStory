import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";

// Import Bootstrap Components
import { Button } from "reactstrap";

class EmojiQuestion extends Component {
  constructor(props) {
    super(props);
    this.renderAnswerOptions= this.renderAnswerOptions.bind(this);
  }

  renderAnswerOptions(key) {
    return (
      <Button
        color="answer"
        size="lg"
        key={key.text}
        onClick={() => this.props.onAnswerSelected(key)}
        block
      >
        {key.text[0].toUpperCase() + key.text.slice(1)}
      </Button>
    );
  }

  render() {
    return (
      <Fragment>
        <h2>{this.props.question}…</h2>

        {this.props.answerOptions.map(this.renderAnswerOptions)}
      </Fragment>
    );
  }
}

EmojiQuestion.propTypes = {
  question: PropTypes.string,
  answerOptions: PropTypes.array,
  onAnswerSelected: PropTypes.func
};

export default EmojiQuestion;
