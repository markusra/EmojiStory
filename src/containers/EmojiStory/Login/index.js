import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./index.css";
import history from "../../../history";
import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import LoginOverlay from "../../../components/LoginOverlay";
import LoginInfoOverlay from "../../../components/LoginInfoOverlay";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiRow from "../../../components/EmojiStory/EmojiRow";
import { Button, Row } from "reactstrap";
import { connect } from "react-redux";
import {
  setUserProgress,
  setReadyFor2ndLogin,
  setTimestamp1,
  setTimestamp2
} from "../../../actions/index";
import { redirectUser } from "../../../services/redirectUser";
import {
  createTimestamp,
  calculateTimeUsed
} from "../../../services/timestamping";
import { timestampUpdateDB } from "../../../services/databaseFunctions";

let strings = {
  en: {
    delete: "Delete"
  },
  no: {
    delete: "Slett"
  },
  de: {
    delete: "Löschen"
  }
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: [],
      loginOverlay: false,
      attemptsLeft: 3,
      loginOverlay2: true,
      isCorrect: false,
      willRedirect: redirectUser(this.props.userProgress)
    };
    this.onTryAgainButtonClick = this.onTryAgainButtonClick.bind(this);
    this.onOkButtonClick = this.onOkButtonClick.bind(this);
    this.onContinueButtonClick = this.onContinueButtonClick.bind(this);
    this.isCorrectPassword = this.isCorrectPassword.bind(this);
  }

  componentWillMount() {
    // We only want to send "time spent on summary page" the first time login mounts
    // Calculate time spent on memorizing and send it to DB
    if (!this.state.willRedirect) {
      const timeUsed = calculateTimeUsed(
        this.props.timestamp1,
        this.props.timestamp2
      );
      timestampUpdateDB("timestamp3", timeUsed);
    }
  }

  onDeleteButtonClick() {
    var tempArray = this.state.emojis.slice();
    tempArray.pop();
    this.setState({ emojis: tempArray });
  }

  isCorrectPassword(emojiArray) { 
    for (var i = 0; i < 4; i++) {
      if (this.props.answers[i].src !== emojiArray[i]) {
        return false;
      }
    }
    return true;
  }

  onEmojiButtonClick(id) {
    var tempArray = this.state.emojis.slice();
    tempArray.push(this.props.keyboard[id].src);
    this.setState({ emojis: tempArray });
    
    if (tempArray.length === 4) {
      // Set second timestamp for time spent on logging in
      const timestamp = createTimestamp();
      this.props.setTimestamp2(timestamp);

      const isCorrect = this.isCorrectPassword(tempArray);
      const attempts = this.state.attemptsLeft - 1;
      this.setState({ attemptsLeft: attempts, loginOverlay: true, isCorrect: isCorrect});
    }
  }

  onTryAgainButtonClick() {
    this.setState({ emojis: [], loginOverlay: false });
  }

  onContinueButtonClick() {
    const timeUsed = calculateTimeUsed(
      this.props.timestamp1,
      this.props.timestamp2
    );

    if (this.props.readyFor2ndLogin) {
      timestampUpdateDB("timestamp5", timeUsed, 3 - this.state.attemptsLeft);
      const url = "/finish";
      this.props.setUserProgress(url);
      history.push(url);
    } else {
      timestampUpdateDB("timestamp4", timeUsed, 3 - this.state.attemptsLeft);
      this.props.setReadyFor2ndLogin();
      const url = "/survey";
      this.props.setUserProgress(url);
      history.push(url);
    }
  }


  onOkButtonClick() {
    // Set first timestamp for time spent on logging in
    const timestamp = createTimestamp();
    this.props.setTimestamp1(timestamp);

    this.setState({ loginOverlay2: false });
  }

  render() {
    const emojiPath = "/emojis/";
    return (
      <Fragment>
        {this.state.willRedirect ? null : (
          <EmojiContainer>
            <LoginOverlay
              visible={this.state.loginOverlay}
              isCorrect={this.state.isCorrect}
              attemptsLeft={this.state.attemptsLeft}
              onTryAgainButtonClick={this.onTryAgainButtonClick}
              onContinueButtonClick={this.onContinueButtonClick}
            />
            <LoginInfoOverlay
              visible={this.state.loginOverlay2}
              onOkButtonClick={this.onOkButtonClick}
              readyFor2ndAttempt={this.state.readyFor2ndAttempt}
            />
            <EmojiBody>
              <div className="flexContainer">
                <div className="passwordContainer">
                  <EmojiRow
                    emojiIcon_1={this.state.emojis[0]}
                    emojiIcon_2={this.state.emojis[1]}
                    emojiIcon_3={this.state.emojis[2]}
                    emojiIcon_4={this.state.emojis[3]}
                  />
                </div>

            <div className="deleteButtonContainer">
              <Button
                className="deleteButton"
                color="danger"
                size="lg"
                onClick={() => this.onDeleteButtonClick()}
                block
              >
                {strings[this.props.language].delete}
              </Button>
            </div>
          </div>
        </EmojiBody>
      </EmojiContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProgress: state.userProgress,
    keyboard: state.keyboard,
    readyFor2ndLogin: state.readyFor2ndLogin,
    timestamp1: state.timestamp1,
    timestamp2: state.timestamp2,
    answers: state.answers,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setReadyFor2ndLogin: readyFor2ndLogin => {
      dispatch(setReadyFor2ndLogin(readyFor2ndLogin));
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

Login.propTypes = {
  userProgress: PropTypes.string,
  keyboard: PropTypes.array,
  readyFor2ndLogin: PropTypes.bool,
  setReadyFor2ndLogin: PropTypes.func,
  setUserProgress: PropTypes.func,
  setLoginAttempts: PropTypes.func,
  setTimestamp1: PropTypes.func,
  setTimestamp2: PropTypes.func,
  timestamp1: PropTypes.number,
  timestamp2: PropTypes.number,
  answers: PropTypes.array,
  language: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
