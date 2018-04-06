import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

let strings = {
  en: {
    finish: "Done",
    finishText: (
      <Fragment>
        <p>
          If you have any questions or comments, please{" "}
          <a
            href="mailto:mail@emojistory.site?subject=Feedback on EmojiStory"
            target="_top"
          >
            send us an email
          </a>.
        </p>
      </Fragment>
    )
  },
  no: {
    finish: "Ferdig",
    finishText: (
      <Fragment>
        <p>
          Hvis du har spørsmål eller kommentarer, vennligst{" "}
          <a
            href="mailto:mail@emojistory.site?subject=Feedback on EmojiStory"
            target="_top"
          >
            send oss en e-post
          </a>.
        </p>
      </Fragment>
    )
  },
  de: {
    finish: "Das war's",
    finishText: (
      <Fragment>
        <p>
          Solltest du Fragen oder Kommentare haben, dann{" "}
          <a
            href="mailto:mail@emojistory.site?subject=Feedback on EmojiStory"
            target="_top"
          >
            schicke uns bitte eine Mail
          </a>.
        </p>
      </Fragment>
    )
  }
};

class Finish extends Component {
  render() {
    return (
      <div className="flex-container">
        <div id="startContainer">
          <div className="flex-item">
            <h1>{strings[this.props.language].finish}</h1>
          </div>
          <div className="flex-item">
            <h2>{strings[this.props.language].finishText}</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress,
    language: state.language,
    timestamp1: state.timestamp1,
    timestamp2: state.timestamp2,
    attemptsLeft: state.attemptsLeft,
    correctPassword: state.correctPassword
  };
};

Finish.propTypes = {
  userProgress: PropTypes.string,
  language: PropTypes.string,
  timestamp1: PropTypes.number,
  timestamp2: PropTypes.number,
  attemptsLeft: PropTypes.number,
  correctPassword: PropTypes.string
};

export default connect(mapStateToProps)(Finish);
