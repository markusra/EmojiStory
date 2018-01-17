import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";

// Import Bootstrap Components
import { Button } from "reactstrap";

class EmojiQuestion extends Component {
  render() {
    return (
      <Fragment>
        <h2>{this.props.question}</h2>

        {this.props.answers.map((item, index) => (
          <Button color="answer" size="lg" key={index} block>
            {item}
          </Button>
        ))}
      </Fragment>
    );
  }
}

EmojiQuestion.propTypes = {
  question: PropTypes.string,
  answers: PropTypes.array
};

export default EmojiQuestion;
