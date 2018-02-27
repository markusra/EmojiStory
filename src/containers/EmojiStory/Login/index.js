import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import history from "../../../history";

import EmojiContainer from "../../../components/EmojiStory/EmojiContainer";
import LoginOverlay from "../../../components/LoginOverlay";
import LoginInfoOverlay from "../../../components/LoginInfoOverlay";
import EmojiBody from "../../../components/EmojiStory/EmojiContainer/EmojiBody";
import EmojiRow from "../../../components/EmojiStory/EmojiRow";

// Import Bootstrap Components
import { Button, Row } from "reactstrap";

// Connect to Redux store
import { connect } from "react-redux";

import { setUserProgress, setReadyFor2ndLogin, setTimestamp1, setTimestamp2, setLoginAttempts } from "../../../actions/index";

import { redirectUser } from "../../../services/redirectUser";
import { createTimestamp, calculateTimeUsed } from "../../../services/timestamping";
import { timestampUpdateDB } from "../../../services/databaseFunctions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: [],
      loginOverlay: false,
      attemptsLeft: 3,
      loginOverlay2: true
    };
    this.onTryAgainButtonClick = this.onTryAgainButtonClick.bind(this);
    this.onOkButtonClick = this.onOkButtonClick.bind(this);
    this.onContinueButtonClick = this.onContinueButtonClick.bind(this);
  }

  componentWillMount() {
    redirectUser(this.props.userProgress);
    // We only want to send "time spent on summary page" the first time login mounts
    // Calculate time spent on memorizing and send it to DB
    if (this.props.userProgress === "/login") {
      const timeUsed = calculateTimeUsed(this.props.timestamp1, this.props.timestamp2)
      timestampUpdateDB("timestamp3", timeUsed)
    }
  }

  onDeleteButtonClick() {
    var tempArray = this.state.emojis.slice();
    tempArray.pop();
    this.setState({ emojis: tempArray });
  }

  onEmojiButtonClick(id) {
    if (this.state.emojis.length === 3) {
      // Set second timestamp for time spent on logging in
      const timestamp = createTimestamp();
      this.props.setTimestamp2(timestamp);

      const attempts = this.state.attemptsLeft - 1;
      this.setState({ attemptsLeft: attempts, loginOverlay: true });
      this.props.setLoginAttempts(3 - attempts);
    }

    var tempArray = this.state.emojis.slice();
    tempArray.push(this.props.keyboard[id].src);
    this.setState({ emojis: tempArray });
  }

  onTryAgainButtonClick() {
    this.setState({ emojis: [], loginOverlay: false });
  }

  onContinueButtonClick() {
    if (this.props.readyFor2ndLogin) {
      const url = "/finish";
      this.props.setUserProgress(url);
      history.push(url);
    } else {
      this.props.setReadyFor2ndLogin();
      const url = "/survey";
      this.props.setUserProgress(url);
      history.push(url);
    }
  }

  isCorrectPassword() {
    for (var i = 0; i < 4; i++)  {
      if (this.props.answers[i].src !== this.state.emojis[i]) {
        return false
      }
    }
    return true;
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
      <EmojiContainer>
        <LoginOverlay
          visible={this.state.loginOverlay}
          isCorrect={this.isCorrectPassword()}
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

            <div className="keyboard">
              <Row className="emojisKeyboardRow justify-content-center">
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(0)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[0].src}
                    draggable="false"
                    alt="Emoji 1"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(1)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[1].src}
                    draggable="false"
                    alt="Emoji 2"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground margin-0"
                  onClick={() => this.onEmojiButtonClick(2)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[2].src}
                    draggable="false"
                    alt="Emoji 3"
                  />
                </Button>
              </Row>
              <Row className="emojisKeyboardRow justify-content-center">
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(3)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[3].src}
                    draggable="false"
                    alt="Emoji 4"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(4)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[4].src}
                    draggable="false"
                    alt="Emoji 5"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground margin-0"
                  onClick={() => this.onEmojiButtonClick(5)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[5].src}
                    draggable="false"
                    alt="Emoji 6"
                  />
                </Button>
              </Row>
              <Row className="emojisKeyboardRow justify-content-center">
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(6)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[6].src}
                    draggable="false"
                    alt="Emoji 7"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(7)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[7].src}
                    draggable="false"
                    alt="Emoji 8"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground margin-0"
                  onClick={() => this.onEmojiButtonClick(8)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[8].src}
                    draggable="false"
                    alt="Emoji 9"
                  />
                </Button>
              </Row>
              <Row className="emojisKeyboardRow justify-content-center">
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(9)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[9].src}
                    draggable="false"
                    alt="Emoji 10"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground"
                  onClick={() => this.onEmojiButtonClick(10)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[10].src}
                    draggable="false"
                    alt="Emoji 11"
                  />
                </Button>
                <Button
                  color="default"
                  className="emojiKeyboardBackground margin-0"
                  onClick={() => this.onEmojiButtonClick(11)}
                >
                  <img
                    src={emojiPath + this.props.keyboard[11].src}
                    draggable="false"
                    alt="Emoji 12"
                  />
                </Button>
              </Row>
            </div>

            <div className="deleteButtonContainer">
              <Button
                className="deleteButton"
                color="danger"
                size="lg"
                onClick={() => this.onDeleteButtonClick()}
                block
              >
                Delete
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
    answers: state.answers
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
    },
    setLoginAttempts: loginAttempts => {
      dispatch(setLoginAttempts(loginAttempts));
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
  answers: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
