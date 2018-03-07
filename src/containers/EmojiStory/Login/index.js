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
  setTimestamp2,
  setAttemptsLeft,
  setCorrectPassword
} from "../../../actions/index";
import { redirectUser } from "../../../services/redirectUser";
import {
  createTimestamp,
} from "../../../services/timestamping";

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
      loginOverlay2: this.props.attemptsLeft === 3,
      isCorrect: false,
      willRedirect: redirectUser(this.props.userProgress)
    };
    this.onTryAgainButtonClick = this.onTryAgainButtonClick.bind(this);
    this.onOkButtonClick = this.onOkButtonClick.bind(this);
    this.onContinueButtonClick = this.onContinueButtonClick.bind(this);
    this.isCorrectPassword = this.isCorrectPassword.bind(this);
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
    this.props.setCorrectPassword();
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
      const attempts = this.props.attemptsLeft - 1;
      this.props.setAttemptsLeft(attempts);

      if (attempts <= 0) {
        if (this.props.readyFor2ndLogin) {
          this.props.setUserProgress("/finish");
        } else {
          this.props.setUserProgress("/survey");
        }
      }

      this.setState({
        loginOverlay: true,
        isCorrect: isCorrect
      });
    }
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
      //timestampUpdateDB("timestamp4", timeUsed, 3 - this.props.attemptsLeft);
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
              attemptsLeft={this.props.attemptsLeft}
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
                    {strings[this.props.language].delete}
                  </Button>
                </div>
              </div>
            </EmojiBody>
          </EmojiContainer>
        )}
      </Fragment>
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
    language: state.language,
    attemptsLeft: state.attemptsLeft
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
    setAttemptsLeft: attemptsLeft => {
      dispatch(setAttemptsLeft(attemptsLeft));
    },
    setCorrectPassword: correctPassword => {
      dispatch(setCorrectPassword(correctPassword));
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
  language: PropTypes.string,
  attemptsLeft: PropTypes.number,
  setAttemptsLeft: PropTypes.func,
  setCorrectPassword: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
